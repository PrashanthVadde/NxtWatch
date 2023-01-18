import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginPage,
  FormContainer,
  LoginImage,
  LabelStyles,
  InputStyles,
  FieldStyles,
  ShowPassword,
  ShowPasswordContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserField = isDarkModeOn => {
    const {username} = this.state

    return (
      <FieldStyles>
        <LabelStyles htmlFor="username" isDarkModeActive={isDarkModeOn}>
          USERNAME
        </LabelStyles>
        <InputStyles
          isDarkModeActive={isDarkModeOn}
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </FieldStyles>
    )
  }

  renderPasswordField = isDarkModeOn => {
    const {password, showPassword} = this.state

    let typeForPassword

    if (showPassword) {
      typeForPassword = 'text'
    } else {
      typeForPassword = 'password'
    }

    return (
      <FieldStyles>
        <LabelStyles htmlFor="password" isDarkModeActive={isDarkModeOn}>
          PASSWORD
        </LabelStyles>
        <InputStyles
          isDarkModeActive={isDarkModeOn}
          type={typeForPassword}
          value={password}
          id="password"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </FieldStyles>
    )
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, option)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
      console.log(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <LoginPage isDarkModeActive={isDarkModeOn}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                isDarkModeActive={isDarkModeOn}
              >
                {isDarkModeOn ? (
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}

                {this.renderUserField(isDarkModeOn)}
                {this.renderPasswordField(isDarkModeOn)}
                <ShowPasswordContainer>
                  <input
                    type="checkbox"
                    id="showPassword"
                    onClick={this.onClickShowPassword}
                  />
                  <ShowPassword
                    htmlFor="showPassword"
                    isDarkModeActive={isDarkModeOn}
                  >
                    Show Password
                  </ShowPassword>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginPage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
