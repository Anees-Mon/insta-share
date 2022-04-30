import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'

import './index.css'

class UserPostItem extends Component {
  state = {likeStatus: false}

  onClickLikeButton = async () => {
    const {likeStatus} = this.state
    const {UserPostDetails} = this.props
    const {postId} = UserPostDetails
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const requestObject = {like_status: !likeStatus}
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(requestObject),
    }

    const response = await fetch(url, options)
    if (response.ok) {
      this.setState({likeStatus: !likeStatus})
    }
  }

  renderUserPostComments = () => {
    const {UserPostDetails} = this.props
    const {comments} = UserPostDetails
    return (
      <ul className="upi-comments-container">
        {comments.map(eachComment => {
          const {userId, userName, comment} = eachComment
          return (
            <li className="upi-comment-item" key={userId}>
              <p className="upi-comment">
                <span className="upi-comment-username">{userName}</span>
                {comment}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    const {likeStatus} = this.state
    const {UserPostDetails} = this.props
    const {
      createdAt,
      likesCount,
      postDetails,
      profilePic,
      userId,
      userName,
    } = UserPostDetails
    const {caption, imageUrl} = postDetails

    return (
      <li className="upi-card">
        <div className="upi-header">
          <div className="upi-avatar-container">
            <img
              className="upi-avatar"
              alt="post author profile"
              src={profilePic}
            />
          </div>
          <Link className="upi-username-link" to={`/users/${userId}`}>
            <p className="upi-user-name">{userName}</p>
          </Link>
        </div>
        <div className="upi-image-background-container">
          <div
            className="upi-image-background"
            style={{backgroundImage: `url(${imageUrl})`}}
          />
        </div>
        <img className="upi-image" alt="post" src={imageUrl} />
        <div className="upi-footer">
          <div className="upi-reactions-container">
            {likeStatus ? (
              <button
                className="upi-reaction-button"
                type="button"
                testid="unLikeIcon"
                onClick={this.onClickLikeButton}
              >
                <FcLike className="upi-like-icon" />
              </button>
            ) : (
              <button
                className="upi-reaction-button"
                type="button"
                testid="likeIcon"
                onClick={this.onClickLikeButton}
              >
                <AiOutlineHeart className="upi-unlike-icon" />
              </button>
            )}

            <button className="upi-reaction-button" type="button">
              <FaRegComment className="upi-comment-icon" />
            </button>
            <button className="upi-reaction-button" type="button">
              <BiShareAlt className="upi-share-icon" />
            </button>
          </div>
          <p className="upi-likes-count">{likesCount + likeStatus} likes</p>
          <p className="upi-caption">{caption}</p>
          {this.renderUserPostComments()}
          <p className="upi-time">{createdAt}</p>
        </div>
      </li>
    )
  }
}

export default UserPostItem
