import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

import Header from '../Header'
import {
  UpContainer,
  UpHeader,
  UpAvatarLg,
  UpName,
  UpAvatarCountsContainer,
  UpAvatarSm,
  UpCountsContainer,
  UpCountItem,
  UpCountValue,
  UpCountLabel,
  UpUsername,
  UpBio,
  UpStoriesContainer,
  UpStoryItem,
  UpStoryImage,
  UpHorizontalRule,
  UpTab,
  UpTabLabel,
  UpInfoContainer,
  UpPostsContainer,
  UpPostContainer,
  UpPostImage,
  UpNoPostsContainer,
  UpNoPostsIconContainer,
  UpNoPostsMessage,
} from './styledComponents'

import './index.css'

const Profile = props => {
  const renderStories = () => {
    const {profileDetails, owner} = props
    const {stories} = profileDetails

    if (stories.length !== 0) {
      return (
        <UpStoriesContainer>
          {stories.map(eachItem => {
            const {id, image} = eachItem
            return (
              <UpStoryItem key={id}>
                <UpStoryImage alt={`${owner} story`} src={image} />
              </UpStoryItem>
            )
          })}
        </UpStoriesContainer>
      )
    }
    return null
  }

  const renderPosts = () => {
    const {profileDetails, owner} = props
    const {posts} = profileDetails

    if (posts.length !== 0) {
      return (
        <UpPostsContainer>
          {posts.map(eachItem => {
            const {id, image} = eachItem
            return (
              <UpPostContainer key={id}>
                <UpPostImage alt={`${owner} post`} src={image} />
              </UpPostContainer>
            )
          })}
        </UpPostsContainer>
      )
    }
    return (
      <UpNoPostsContainer>
        <UpNoPostsIconContainer>
          <BiCamera className="up-no-posts-icon" />
        </UpNoPostsIconContainer>
        <UpNoPostsMessage>No Posts Yet</UpNoPostsMessage>
      </UpNoPostsContainer>
    )
  }

  const {profileDetails, owner} = props
  const {
    followersCount,
    followingCount,
    postsCount,
    profilePic,
    userBio,
    userId,
    userName,
  } = profileDetails

  return (
    <>
      <Header />
      <UpContainer>
        <UpHeader>
          <UpInfoContainer>
            <UpAvatarLg alt="profile picture" src={profilePic} />
            <div>
              <UpName>{userName}</UpName>
              <UpAvatarCountsContainer>
                <UpAvatarSm alt={`${owner} profile`} src={profilePic} />
                <UpCountsContainer>
                  <UpCountItem>
                    <UpCountValue>{postsCount}</UpCountValue>
                    <UpCountLabel>posts</UpCountLabel>
                  </UpCountItem>
                  <UpCountItem>
                    <UpCountValue>{followersCount}</UpCountValue>
                    <UpCountLabel>followers</UpCountLabel>
                  </UpCountItem>
                  <UpCountItem>
                    <UpCountValue>{followingCount}</UpCountValue>
                    <UpCountLabel>following</UpCountLabel>
                  </UpCountItem>
                </UpCountsContainer>
              </UpAvatarCountsContainer>
              <UpUsername>{userId}</UpUsername>
              <UpBio>{userBio}</UpBio>
            </div>
          </UpInfoContainer>

          {renderStories()}
        </UpHeader>
        <UpHorizontalRule />
        <UpTab>
          <BsGrid3X3 className="up-tab-icon" />
          <UpTabLabel>Posts</UpTabLabel>
        </UpTab>
        {renderPosts()}
      </UpContainer>
    </>
  )
}

export default Profile
