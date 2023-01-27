import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  NxtLogo,
  HeaderRightPartItems,
  ThemeBtn,
  ProfileImage,
  PopupContainer,
  ButtonsContainer,
  ButtonStyles,
  ConfirmButton,
  LogoutButton,
  LogoutMsg,
} from './styledComponents'

class Header extends Component {
  onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn, onToggleTheme} = value

          const onClickDarkModeIcon = () => {
            onToggleTheme()
          }

          return (
            <HeaderContainer isDarkModeActive={isDarkModeOn}>
              {isDarkModeOn ? (
                <Link to="/" style={{textDecoration: 'none'}}>
                  <NxtLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/" style={{textDecoration: 'none'}}>
                  <NxtLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}

              <HeaderRightPartItems>
                {isDarkModeOn ? (
                  <li>
                    <ThemeBtn
                      type="button"
                      onClick={onClickDarkModeIcon}
                      data-testid="theme"
                    >
                      <HiOutlineSun size={30} style={{color: 'white'}} />
                    </ThemeBtn>
                  </li>
                ) : (
                  <li>
                    <ThemeBtn
                      type="button"
                      onClick={onClickDarkModeIcon}
                      data-testid="theme"
                    >
                      <HiMoon size={30} />
                    </ThemeBtn>
                  </li>
                )}

                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <li className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        isDarkModeActive={isDarkModeOn}
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <PopupContainer isDarkModeActive={isDarkModeOn}>
                        <LogoutMsg isDarkModeActive={isDarkModeOn}>
                          Are you sure, you want to logout
                        </LogoutMsg>
                        <ButtonsContainer>
                          <ButtonStyles type="button" onClick={() => close()}>
                            Cancel
                          </ButtonStyles>

                          <ConfirmButton
                            type="button"
                            onClick={this.onClickLogoutButton}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopupContainer>
                    )}
                  </Popup>
                </li>
              </HeaderRightPartItems>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
