import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  SideBarContainer,
  TabsPart,
  HomeTabContainer,
  TrendingTabContainer,
  GamingTabContainer,
  SavedVideosTabContainer,
  HomeSpanEl,
  TrendingSpanEl,
  GamingSpanEl,
  SavedVideosSpanEl,
  HomeBtn,
  FireBtn,
  GameBtn,
  SavedVideoBtn,
  BottomPart,
  ContactUsHeading,
  IconsPart,
  BottomPartDescription,
} from './styledComponents'

import ThemContext from '../../context/ThemeContext'

class SideBar extends Component {
  render() {
    const {tabName} = this.props
    return (
      <ThemContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <SideBarContainer isDarkModeActive={isDarkModeOn}>
              <TabsPart isDarkModeActive={isDarkModeOn}>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <HomeTabContainer
                    btnStatus={tabName}
                    isDarkModeActive={isDarkModeOn}
                  >
                    <HomeBtn btnStatus={tabName}>
                      <AiFillHome size={25} />
                      <HomeSpanEl
                        btnStatus={tabName}
                        isDarkModeActive={isDarkModeOn}
                      >
                        Home
                      </HomeSpanEl>
                    </HomeBtn>
                  </HomeTabContainer>
                </Link>

                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <TrendingTabContainer
                    btnStatus={tabName}
                    isDarkModeActive={isDarkModeOn}
                  >
                    <FireBtn btnStatus={tabName}>
                      <HiFire size={25} />{' '}
                      <TrendingSpanEl
                        btnStatus={tabName}
                        isDarkModeActive={isDarkModeOn}
                      >
                        Trending
                      </TrendingSpanEl>
                    </FireBtn>
                  </TrendingTabContainer>
                </Link>

                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <GamingTabContainer
                    btnStatus={tabName}
                    isDarkModeActive={isDarkModeOn}
                  >
                    <GameBtn btnStatus={tabName}>
                      <SiYoutubegaming size={25} />{' '}
                      <GamingSpanEl
                        btnStatus={tabName}
                        isDarkModeActive={isDarkModeOn}
                      >
                        Gaming
                      </GamingSpanEl>
                    </GameBtn>
                  </GamingTabContainer>
                </Link>

                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <SavedVideosTabContainer
                    btnStatus={tabName}
                    isDarkModeActive={isDarkModeOn}
                  >
                    <SavedVideoBtn btnStatus={tabName}>
                      <BiListPlus size={25} />{' '}
                      <SavedVideosSpanEl
                        btnStatus={tabName}
                        isDarkModeActive={isDarkModeOn}
                      >
                        Saved videos
                      </SavedVideosSpanEl>
                    </SavedVideoBtn>
                  </SavedVideosTabContainer>
                </Link>
              </TabsPart>

              <BottomPart>
                <ContactUsHeading isDarkModeActive={isDarkModeOn}>
                  CONTACT US
                </ContactUsHeading>
                <IconsPart>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    style={{height: 40, width: 40}}
                  />

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    style={{height: 40, width: 40}}
                  />

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    style={{height: 40, width: 40}}
                  />
                </IconsPart>
                <BottomPartDescription isDarkModeActive={isDarkModeOn}>
                  Enjoy! Now to see your <br /> channels and <br />{' '}
                  recommendations!
                </BottomPartDescription>
              </BottomPart>
            </SideBarContainer>
          )
        }}
      </ThemContext.Consumer>
    )
  }
}

export default SideBar
