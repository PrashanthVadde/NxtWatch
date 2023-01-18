import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'

import GamingVideoItem from '../GamingVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingPageContainer,
  GamePageContent,
  GamingPageRightPart,
  GamingPageBanner,
  GameLogoContainer,
  GamingBannerHeading,
  GamingVideoContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBrn,
  GamingVideoListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideo()
  }

  getGamingVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      //   console.log(fetchedData)

      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      //   console.log(updatedData)

      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = isDarkModeOn => {
    const colorName = isDarkModeOn ? '#f9f9f9' : '#010101'

    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={colorName} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <GamingVideoListContainer>
        {gamingVideos.map(eachGamingVideo => (
          <GamingVideoItem
            key={eachGamingVideo.id}
            videoDetails={eachGamingVideo}
          />
        ))}
      </GamingVideoListContainer>
    )
  }

  onClickRetryBtn = () => {
    this.getGamingVideo()
  }

  renderFailureView = isDarkModeOn => (
    <FailureViewContainer>
      {isDarkModeOn ? (
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure view"
        />
      ) : (
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
      )}
      <FailureViewHeading isDarkModeActive={isDarkModeOn}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewDescription isDarkModeActive={isDarkModeOn}>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </FailureViewDescription>
      <RetryBrn type="button" onClick={this.onClickRetryBtn}>
        Retry
      </RetryBrn>
    </FailureViewContainer>
  )

  trendingGamesView = isDarkModeOn => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoadingView(isDarkModeOn)

      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkModeOn)

      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkModeOn)

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <GamingPageContainer
              isDarkModeActive={isDarkModeOn}
              data-testid="gaming"
            >
              <Header />
              <GamePageContent>
                <SideBar tabName="gaming" />
                <GamingPageRightPart>
                  <GamingPageBanner
                    isDarkModeActive={isDarkModeOn}
                    data-testid="banner"
                  >
                    <GameLogoContainer isDarkModeActive={isDarkModeOn}>
                      <SiYoutubegaming size={40} style={{color: '#ff0000'}} />
                    </GameLogoContainer>

                    <GamingBannerHeading isDarkModeActive={isDarkModeOn}>
                      Gaming
                    </GamingBannerHeading>
                  </GamingPageBanner>

                  <GamingVideoContainer isDarkModeActive={isDarkModeOn}>
                    {this.trendingGamesView(isDarkModeOn)}
                  </GamingVideoContainer>
                </GamingPageRightPart>
              </GamePageContent>
            </GamingPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
