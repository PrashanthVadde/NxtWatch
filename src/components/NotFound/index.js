import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundPageContainer,
  NotFoundPageContent,
  NotFoundPageRightPart,
  NotFoundPageImage,
  NotFoundPageHeading,
  NotFoundPageDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeOn} = value

      return (
        <NotFoundPageContainer isDarkModeActive={isDarkModeOn}>
          <Header />
          <NotFoundPageContent>
            <SideBar tabName="none" />
            <NotFoundPageRightPart isDarkModeActive={isDarkModeOn}>
              {isDarkModeOn ? (
                <NotFoundPageImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              ) : (
                <NotFoundPageImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}
              <NotFoundPageHeading isDarkModeActive={isDarkModeOn}>
                Page Not Found
              </NotFoundPageHeading>
              <NotFoundPageDescription>
                We are sorry, the page you requested could not be found.
              </NotFoundPageDescription>
            </NotFoundPageRightPart>
          </NotFoundPageContent>
        </NotFoundPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
