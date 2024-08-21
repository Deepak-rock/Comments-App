import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  commentDelete = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  AddCommentsList = () => {
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initail-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newCommentList = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialContainer: initialContainerBackgroundClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newCommentList],
      nameInput: '',
      commentInput: '',
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentsDetails={eachComment}
        toggleIsLike={this.toggleIsLike}
        commentDelete={this.commentDelete}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="app-contianer">
        <div className="comment-content-container">
          <h1 className="heading">Comments</h1>
          <div className="commnts-inputs">
            <form className="from" onSubmit={this.AddCommentsList}>
              <p className="para-text">Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={nameInput}
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                type="text"
                rows="6"
                value={commentInput}
                placeholder="Your Name"
                className="comment-input"
                onChange={this.onChangeComment}
              />
              <br />
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <p className="comments-count">
            <span className="count-container">{count}</span>Comments
          </p>
          <ul className="comment-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
