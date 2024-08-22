import {formatDistanceToNow} from 'date-fns'

import './index.css'
// Write your code here

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, isLiked, initialContainer, date} = commentDetails
  const initialContainerClassName = `initail-container ${initialContainer}`
  const initial = name[0].toUpperCase()
  const active = isLiked ? 'active btn' : 'btn'
  const postedTime = formatDistanceToNow(date)

  return (
    <li className="comment-item">
      <div className="comments-container">
        <div className={initialContainerClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="like-image"
          />
          <button className={active} type="button">
            Like
          </button>
        </div>
        <button className="btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
