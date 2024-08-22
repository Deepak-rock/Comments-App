import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'

/* const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
] */
const initialCommentList = [
  {
    id: uuidv4(),
    name: 'Deepak',
    comment:
      'When the Delete button of a comment is clicked, the comment should be deleted from the list of comments and the comments count should be decremented by one',
    isLiked: false,
    date: new Date(),
    initialContainer: 'amber',
  },
  {
    id: uuidv4(),
    name: 'Vivky',
    comment: 'Hi',
    isLiked: false,
    date: new Date(),
    initialContainer: 'orange',
  },
]
// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    /* commentsList: [], */
  }

  render() {
    const {nameInput, commentInput /* commentsList */} = this.state
    const count = initialCommentList.length
    return (
      <div className="app-container">
        <div className="input-comments-container">
          <h1 className="heading">Comments</h1>
          <div className="input-container">
            <from className="from">
              <p className="para-text">Say something about 4.0 technologies</p>
              <input
                className="name-input"
                placeholder="Your name"
                value={nameInput}
                type="text"
              />
              <br />
              <textarea
                rows="6"
                className="comment-input"
                placeholder="Your Comment"
                value={commentInput}
                type="text"
              />
              <div className="add-btn-container">
                <button className="add-button" type="submit">
                  Add Comment
                </button>
              </div>
            </from>
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
          <ul className="comment-list">
            {initialCommentList.map(eachitem => (
              <CommentItem key={eachitem.id} commentDetails={eachitem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
