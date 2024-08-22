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

  addCommentsList = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const newCommentList = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialContainer:
        initialContainerBackgroundClassNames[
          initialContainerBackgroundClassName
        ],
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newCommentList],
      nameInput: '',
      commentInput: '',
    }))
  }

  onCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(details => {
        if (details.id === id) {
          return {...details, isLiked: !details.isLiked}
        }
        return details
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(
        commentDelete => commentDelete.id !== id,
      ),
    })
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachDetails => (
      <CommentItem
        key={eachDetails.id}
        commentDetail={eachDetails}
        onToggleLike={this.onToggleLike}
        onDeleteComment={this.onDeleteComment}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="app-container">
        <div className="input-comments-container">
          <h1 className="heading">Comments</h1>
          <div className="input-container">
            <form className="from" onSubmit={this.addCommentsList}>
              <p className="para-text">Say something about 4.0 technologies</p>
              <input
                className="name-input"
                placeholder="Your name"
                value={nameInput}
                type="text"
                onChange={this.onNameInput}
              />
              <br />
              <textarea
                rows="6"
                className="comment-input"
                placeholder="Your Comment"
                value={commentInput}
                type="text"
                onChange={this.onCommentInput}
              />
              <div className="add-btn-container">
                <button className="add-button" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <p className="count-comment">
            <span className="count">{count}</span> Comments
          </p>
          <ul className="comment-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
