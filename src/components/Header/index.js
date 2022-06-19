import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoIosMenu} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import {HiLightBulb, HiOutlineLightBulb} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  NavContent,
  NavContainer,
  HeaderWebsiteLogo,
  HeaderWebsiteTitle,
  HeaderMenuButton,
  NavMenuSm,
  NavItem,
  NavItemButton,
  SearchTextButton,
  HeaderThemeButton,
  HeaderLogoutButton,
  HeaderSearchContainerSm,
  HeaderSearch,
  HeaderSearchButton,
  NavMenuLg,
  HeaderSearchContainerLg,
  NavbarFooterRule,
} from './styledComponents'

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
    const {isSearchActive, isMenuVisible} = this.state
    const {searchQuery} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value
          const themeIcon = isDark ? (
            <HiOutlineLightBulb className="header-theme-icon" />
          ) : (
            <HiLightBulb className="header-theme-icon" />
          )
          return (
            <>
              <Navbar dark={isDark}>
                <NavContent>
                  <NavContainer>
                    <Link className="nav-logo-link" to="/">
                      <HeaderWebsiteLogo
                        alt="website logo"
                        src="https://res.cloudinary.com/aneesmon/image/upload/v1648277533/Insta_Share/website-logo_yvroxv.png"
                      />
                      <HeaderWebsiteTitle>Insta Share</HeaderWebsiteTitle>
                    </Link>
                    <HeaderMenuButton
                      onClick={this.onClickHamburgerMenu}
                      type="button"
                    >
                      <IoIosMenu className="header-menu-icon" />
                    </HeaderMenuButton>
                  </NavContainer>

                  {isMenuVisible && (
                    <NavMenuSm>
                      <NavItem>
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
                      </NavItem>
                      <NavItem className="nav-item">
                        <SearchTextButton
                          className={`nav-link ${
                            isSearchActive && 'active-menu'
                          }`}
                          type="button"
                          onClick={this.onClickSearch}
                        >
                          Search
                        </SearchTextButton>
                      </NavItem>
                      <NavItem className="nav-item">
                        <Link
                          className={`nav-link ${
                            this.getActiveRoute() === '/my-profile' &&
                            'active-menu'
                          }`}
                          to="/my-profile"
                        >
                          Profile
                        </Link>
                      </NavItem>
                      <NavItem className="nav-item">
                        <HeaderThemeButton type="button" onClick={toggleTheme}>
                          {themeIcon}
                        </HeaderThemeButton>
                      </NavItem>
                      <NavItem>
                        <HeaderLogoutButton
                          type="button"
                          onClick={this.onClickLogout}
                        >
                          Logout
                        </HeaderLogoutButton>
                      </NavItem>
                    </NavMenuSm>
                  )}

                  {isSearchActive && (
                    <HeaderSearchContainerSm dark={isDark}>
                      <HeaderSearch
                        type="search"
                        placeholder="Search Caption"
                        value={searchQuery}
                        onChange={this.onChangeSearchQuery}
                      />
                      <HeaderSearchButton
                        type="button"
                        onClick={this.onClickSearchButton}
                        testid="searchIcon"
                        dark={isDark}
                      >
                        <FaSearch className="header-search-icon" />
                      </HeaderSearchButton>
                    </HeaderSearchContainerSm>
                  )}

                  <NavMenuLg>
                    <HeaderSearchContainerLg dark={isDark}>
                      <HeaderSearch
                        type="search"
                        placeholder="Search Caption"
                        value={searchQuery}
                        onChange={this.onChangeSearchQuery}
                      />
                      <HeaderSearchButton
                        type="button"
                        onClick={this.onClickSearchButton}
                        testid="searchIcon"
                        dark={isDark}
                      >
                        <FaSearch className="header-search-icon" />
                      </HeaderSearchButton>
                    </HeaderSearchContainerLg>

                    <NavItem>
                      <Link
                        className={`nav-link ${
                          this.getActiveRoute() === '/' && 'active-menu'
                        }`}
                        to="/"
                      >
                        Home
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link
                        className={`nav-link ${
                          this.getActiveRoute() === '/my-profile' &&
                          'active-menu'
                        }`}
                        to="/my-profile"
                      >
                        Profile
                      </Link>
                    </NavItem>
                    <NavItem>
                      <HeaderThemeButton type="button" onClick={toggleTheme}>
                        {themeIcon}
                      </HeaderThemeButton>
                    </NavItem>
                    <NavItemButton>
                      <HeaderLogoutButton
                        type="button"
                        onClick={this.onClickLogout}
                      >
                        Logout
                      </HeaderLogoutButton>
                    </NavItemButton>
                  </NavMenuLg>
                </NavContent>
              </Navbar>
              <NavbarFooterRule dark={isDark} />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
