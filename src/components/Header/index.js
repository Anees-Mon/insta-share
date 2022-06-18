import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoIosMenu} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import {HiLightBulb, HiOutlineLightBulb} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Header extends Component {
  state = {isMenuVisible: false, isSearchActive: false}

  onClickSearch = () => {
    if (this.getActiveRoute() === '/') {
      this.setState(prevState => ({isSearchActive: !prevState.isSearchActive}))
    }
  }

  getActiveRoute = () => {
    const {match} = this.props
    return match.path
  }

  onClickLogout = () => {
    const {history} = this.props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  onClickHamburgerMenu = () => {
    this.toggleMenuVisibility()
  }

  toggleMenuVisibility = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible,
    }))
  }

  onChangeSearchQuery = event => {
    const {updateSearchQuery} = this.props
    updateSearchQuery(event.target.value)
  }

  onClickSearchButton = () => {
    const {getSearchResults} = this.props
    getSearchResults()
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value
          const themeIcon = isDark ? (
            <HiOutlineLightBulb className="header-theme-icon" />
          ) : (
            <HiLightBulb className="header-theme-icon" />
          )
          const {isSearchActive, isMenuVisible} = this.state
          const {searchQuery} = this.props

          return (
            <>
              <nav className="navbar">
                <div className="nav-content">
                  <div className="nav-container">
                    <Link className="nav-logo-link" to="/">
                      <img
                        className="header-website-logo"
                        alt="website logo"
                        src="https://res.cloudinary.com/aneesmon/image/upload/v1648277533/Insta_Share/website-logo_yvroxv.png"
                      />
                      <h1 className="header-website-title">Insta Share</h1>
                    </Link>
                    <button
                      className="header-menu-button"
                      onClick={this.onClickHamburgerMenu}
                      type="button"
                    >
                      <IoIosMenu className="header-menu-icon" />
                    </button>
                  </div>

                  {isMenuVisible && (
                    <ul className="nav-menu-sm">
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${
                            this.getActiveRoute() === '/' &&
                            !isSearchActive &&
                            'active-menu'
                          }`}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            isSearchActive && 'active-menu'
                          }`}
                          type="button"
                          onClick={this.onClickSearch}
                        >
                          Search
                        </button>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={`nav-link ${
                            this.getActiveRoute() === '/my-profile' &&
                            'active-menu'
                          }`}
                          to="/my-profile"
                        >
                          Profile
                        </Link>
                      </li>
                      <li className="nav-item">
                        <button
                          className="header-theme-button"
                          type="button"
                          onClick={toggleTheme}
                        >
                          {themeIcon}
                        </button>
                      </li>
                      <li>
                        <button
                          className="header-logout-button"
                          type="button"
                          onClick={this.onClickLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}

                  {isSearchActive && (
                    <div className="header-search-container-sm">
                      <input
                        className="header-search"
                        type="search"
                        placeholder="Search Caption"
                        value={searchQuery}
                        onChange={this.onChangeSearchQuery}
                      />
                      <button
                        className="header-search-button"
                        type="button"
                        onClick={this.onClickSearchButton}
                        testid="searchIcon"
                      >
                        <FaSearch className="header-search-icon" />
                      </button>
                    </div>
                  )}

                  <ul className="nav-menu-lg">
                    <li className="nav-item header-search-container-lg">
                      <input
                        className="header-search"
                        type="search"
                        placeholder="Search Caption"
                        value={searchQuery}
                        onChange={this.onChangeSearchQuery}
                      />
                      <button
                        className="header-search-button"
                        type="button"
                        onClick={this.onClickSearchButton}
                        testid="searchIcon"
                      >
                        <FaSearch className="header-search-icon" />
                      </button>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          this.getActiveRoute() === '/' && 'active-menu'
                        }`}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          this.getActiveRoute() === '/my-profile' &&
                          'active-menu'
                        }`}
                        to="/my-profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="header-theme-button"
                        type="button"
                        onClick={toggleTheme}
                      >
                        {themeIcon}
                      </button>
                    </li>
                    <li>
                      <button
                        className="header-logout-button"
                        type="button"
                        onClick={this.onClickLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
              <hr className="navbar-footer-rule" />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
