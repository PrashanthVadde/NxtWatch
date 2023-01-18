import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'

import TrendingVideoItem from '../TrendingVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingPageContainer,
  TrendingPageContent,
  TrendingPageRightPart,
  TrendingPageBanner,
  FireContainer,
  TrendingBannerHeading,
  TrendingVideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBrn,
  TrendingVideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideoData()
  }

  getTrendingVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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

      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      //   console.log(updatedData)

      this.setState({
        trendingVideos: updatedData,
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
    const {trendingVideos} = this.state

    return (
      <TrendingVideosListContainer>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  onClickRetryBtn = () => {
    this.getTrendingVideoData()
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

  trendingPageViews = isDarkModeOn => {
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
            <TrendingPageContainer
              isDarkModeActive={isDarkModeOn}
              data-testid="trending"
            >
              <Header />
              <TrendingPageContent>
                <SideBar tabName="trending" />
                <TrendingPageRightPart>
                  <TrendingPageBanner
                    isDarkModeActive={isDarkModeOn}
                    data-testid="banner"
                  >
                    <FireContainer isDarkModeActive={isDarkModeOn}>
                      <HiFire size={40} style={{color: '#ff0000'}} />
                    </FireContainer>

                    <TrendingBannerHeading isDarkModeActive={isDarkModeOn}>
                      Trending
                    </TrendingBannerHeading>
                  </TrendingPageBanner>

                  <TrendingVideosContainer isDarkModeActive={isDarkModeOn}>
                    {this.trendingPageViews(isDarkModeOn)}
                  </TrendingVideosContainer>
                </TrendingPageRightPart>
              </TrendingPageContent>
            </TrendingPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
