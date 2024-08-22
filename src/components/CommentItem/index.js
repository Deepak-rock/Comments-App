import {formatDistanceToNow} from 'date-fns'

import './index.css'
// Write your code here

const CommentItem = props => {
  const {commentDetail, onToggleLike, onDeleteComment} = props
  const {id, name, comment, isLiked, initialContainer, date} = commentDetail
  const initialContainerClassName = `initail-container ${initialContainer}`
  const initial = name[0].toUpperCase()
  const active = isLiked ? 'active btn' : 'btn'
  const postedTime = formatDistanceToNow(date)
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const onClickToggleLike = () => {
    onToggleLike(id)
  }

  const onClickDelete = () => {
    onDeleteComment(id)
  }

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
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button className={active} type="button" onClick={onClickToggleLike}>
            Like
          </button>
        </div>
        <button className="btn" type="button" onClick={onClickDelete}>
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
