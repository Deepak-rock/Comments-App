// Write your code here

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentsDetails, toggleIsLike, commentDelete} = props
  const {name, id, comment, isLiked, initialContainer, date} = commentsDetails
  const initial = name ? name[0].topUpperCase : ''
  const postedTime = formatDistanceToNow(date)
  const liketextClassName = isLiked ? 'active button' : 'button'
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onClickDelete = () => {
    commentDelete(id)
  }
  const onClickToggle = () => {
    toggleIsLike(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialContainer}>
          <p className="initial">{initial}</p>
        </div>
        <div className="name-time-container">
          <p className="name">{name}</p>
          <p className="time">{postedTime}</p>
        </div>
        <p className="comment-text">{comment}</p>
      </div>
      <div className="button-container">
        <div className="like-button-container">
          <img src={imageUrl} alt="like" className="like-icon" />
          <button
            className={liketextClassName}
            onClick={onClickToggle}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="delete-button"
          onClick={onClickDelete}
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
