import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPage,
  LoginImageLg,
  LoginContainer,
  LoginTitleContainer,
  LoginWebsiteLogo,
  LoginWebsiteTitle,
  LoginLabel,
  LoginInput,
  LoginErrorMsg,
  LoginButton,
  LoginCard,
  LineBreak,
} from './styledComponents'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: fetchedData.error_msg})
    }
  }

  render() {
    const {errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      return <Redirect to="/" />
    }

    return (
      <LoginPage>
        <LoginContainer>
          <LoginImageLg
            alt="website login"
            src="https://res.cloudinary.com/aneesmon/image/upload/v1648363086/Insta_Share/login-image_q0hj2s.png"
          />
          <LoginCard onSubmit={this.onSubmitLogin}>
            <LoginTitleContainer>
              <LoginWebsiteLogo
                alt="website logo"
                src="https://res.cloudinary.com/aneesmon/image/upload/v1648277533/Insta_Share/website-logo_yvroxv.png"
              />
              <LoginWebsiteTitle>Insta Share</LoginWebsiteTitle>
            </LoginTitleContainer>
            <LoginLabel htmlFor="username">USERNAME</LoginLabel>
            <br />
            <LoginInput
              id="username"
              type="text"
              onChange={this.onChangeUsername}
            />

            <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
            <LineBreak />
            <LoginInput
              id="password"
              type="password"
              onChange={this.onChangePassword}
            />
            <LoginErrorMsg>{errorMsg}</LoginErrorMsg>
            <LoginButton type="submit">Login</LoginButton>
          </LoginCard>
        </LoginContainer>
      </LoginPage>
    )
  }
}

export default Login
