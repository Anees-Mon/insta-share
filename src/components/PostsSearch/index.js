import {Component} from 'react'
import Loader from 'react-loader-spinner'
import UserPostItem from '../UserPostItem'

import {
  PostsSearchTitle,
  PostsSearchInitialImage,
  PostsSearchInitialMessage,
  PostsSearchErrorMessage,
  PostsSearchErrorDescription,
  SearchResultsContainer,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PostsSearch extends Component {
  renderSearchResultsView = () => {
    const {searchResults} = this.props

    if (searchResults.length !== 0) {
      return (
        <>
          <PostsSearchTitle>Search Results</PostsSearchTitle>
          <SearchResultsContainer>
            {searchResults.map(eachPost => (
              <UserPostItem key={eachPost.postId} UserPostDetails={eachPost} />
            ))}
          </SearchResultsContainer>
        </>
      )
    }
    return (
      <div className="user-profile-loader-container">
        <img
          className="user-profile-error-image"
          alt="search not found"
          src="https://res.cloudinary.com/aneesmon/image/upload/v1648988144/Insta_Share/search-not-found-image_pgjuwz.png"
        />
        <PostsSearchErrorMessage>Search Not Found</PostsSearchErrorMessage>
        <PostsSearchErrorDescription>
          Try different keyword or search again
        </PostsSearchErrorDescription>
      </div>
    )
  }

  renderInitialView = () => (
    <div className="user-profile-loader-container">
      <PostsSearchInitialImage
        alt="initial image"
        src="https://res.cloudinary.com/aneesmon/image/upload/v1649495550/Insta_Share/search-initial_oyoblm.png"
      />
      <PostsSearchInitialMessage>
        Search Results will be appear here
      </PostsSearchInitialMessage>
    </div>
  )

  renderLoadingView = () => (
    <div className="user-profile-loader-container" testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  onClickRetry = () => {
    const {getSearchResults} = this.props
    getSearchResults()
  }

  renderFailureView = () => (
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
        onClick={this.onClickRetry}
      >
        Try again
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.props
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderInitialView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSearchResultsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default PostsSearch
