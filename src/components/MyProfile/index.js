import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import Profile from '../Profile'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {myProfileData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getMyProfile()
  }

  getMyProfile = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const getFormattedData = data => ({
      posts: data.posts,
      stories: data.stories,
      followersCount: data.followers_count,
      followingCount: data.following_count,
      id: data.id,
      postsCount: data.posts_count,
      profilePic: data.profile_pic,
      userBio: data.user_bio,
      userId: data.user_id,
      userName: data.user_name,
    })

    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const myProfile = fetchedData.profile
      const updatedMyProfile = getFormattedData(myProfile)
      this.setState({
        myProfileData: updatedMyProfile,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderMyProfileView = () => {
    const {myProfileData} = this.state
    return <Profile profileDetails={myProfileData} owner="my" />
  }

  renderLoadingView = () => (
    <>
      <Header />
      <div className="user-profile-loader-container" testid="loader">
        <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
      </div>
    </>
  )

  renderFailureView = () => (
    <>
      <Header />
      <div className="user-profile-loader-container">
        <img
          className="user-profile-error-image"
          alt="failure view"
          src="https://res.cloudinary.com/aneesmon/image/upload/v1648988134/Insta_Share/failure-image_hzoet8.png"
        />
        <p className="user-profile-error-message">
          Something went wrong. Please try again
        </p>
        <button
          className="user-profile-error-button"
          type="button"
          onClick={this.getMyProfile}
        >
          Try again
        </button>
      </div>
    </>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderMyProfileView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default MyProfile

/* import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {userProfileData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getUserProfile()
  }

  getUserProfile = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const getFormattedData = data => ({
      posts: data.posts,
      stories: data.stories,
      followersCount: data.followers_count,
      followingCount: data.following_count,
      id: data.id,
      postsCount: data.posts_count,
      profilePic: data.profile_pic,
      userBio: data.user_bio,
      userId: data.user_id,
      userName: data.user_name,
    })

    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const userProfile = fetchedData.profile
      const updatedUserProfile = getFormattedData(userProfile)
      this.setState({
        userProfileData: updatedUserProfile,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderStories = () => {
    const {userProfileData} = this.state
    const {stories} = userProfileData
    if (stories.length !== 0) {
      return (
        <ul className="up-stories-container">
          {stories.map(eachItem => {
            const {id, image} = eachItem
            return (
              <li className="up-story-item" key={id}>
                <img className="up-story-image" alt="my story" src={image} />
              </li>
            )
          })}
        </ul>
      )
    }
    return null
  }

  renderPosts = () => {
    const {userProfileData} = this.state
    const {posts} = userProfileData

    if (posts.length !== 0) {
      return (
        <ul className="up-posts-container">
          {posts.map(eachItem => {
            const {id, image} = eachItem
            return (
              <li className="up-post-container" key={id}>
                <img className="up-post-image" alt="my post" src={image} />
              </li>
            )
          })}
        </ul>
      )
    }
    return (
      <div className="up-no-posts-container">
        <div className="up-no-posts-icon-container">
          <BiCamera className="up-no-posts-icon" />
        </div>
        <h1 className="up-no-posts-message">No Posts Yet</h1>
      </div>
    )
  }

  renderUserProfileView = () => {
    const {userProfileData} = this.state
    const {
      followersCount,
      followingCount,
      postsCount,
      profilePic,
      userBio,
      userId,
      userName,
    } = userProfileData

    return (
      <>
        <Header />
        <div className="up-container">
          <div className="up-header">
            <div className="up-info-container">
              <img className="up-avatar-lg" alt="" src={profilePic} />
              <div>
                <h1 className="up-name">{userName}</h1>
                <div className="up-avatar-counts-container">
                  <img
                    className="up-avatar-sm"
                    alt="my profile"
                    src={profilePic}
                  />
                  <ul className="up-counts-container">
                    <li className="up-count-item">
                      <h1 className="up-count-value">{postsCount}</h1>
                      <p className="up-count-label">posts</p>
                    </li>
                    <li className="up-count-item">
                      <h1 className="up-count-value">{followersCount}</h1>
                      <p className="up-count-label">followers</p>
                    </li>
                    <li className="up-count-item">
                      <h1 className="up-count-value">{followingCount}</h1>
                      <p className="up-count-label">following</p>
                    </li>
                  </ul>
                </div>
                <p className="up-username">{userId}</p>
                <p className="up-bio">{userBio}</p>
              </div>
            </div>

            {this.renderStories()}
          </div>
          <hr className="up-horizontal-rule" />
          <div className="up-tab">
            <BsGrid3X3 className="up-tab-icon" />
            <h1 className="up-tab-label">Posts</h1>
          </div>
          {this.renderPosts()}
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <>
      <Header />
      <div className="user-profile-loader-container" testid="loader">
        <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
      </div>
    </>
  )

  renderFailureView = () => (
    <>
      <Header />
      <div className="user-profile-loader-container">
        <img
          className="user-profile-error-image"
          alt="failure view"
          src="https://res.cloudinary.com/aneesmon/image/upload/v1648988134/Insta_Share/failure-image_hzoet8.png"
        />
        <p className="user-profile-error-message">
          Something went wrong. Please try again
        </p>
        <button
          className="user-profile-error-button"
          type="button"
          onClick={this.getUserProfile}
        >
          Try again
        </button>
      </div>
    </>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderUserProfileView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default MyProfile
 */
