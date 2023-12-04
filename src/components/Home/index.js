import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import HomeVideoItem from '../HomeVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  HomePageContainer,
  HomePageContent,
  HomePageRightPart,
  HomeBannerImage,
  CloseBtnContainer,
  CloseBtn,
  NxtWatchLogo,
  HomeBannerDescription,
  HomeBannerBtn,
  HomePageVideos,
  SearchBoxContainer,
  InputEl,
  SearchIconContainer,
  LoaderContainer,
  HomeVideosContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBtn,
  NoSearchResultsView,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getHomePageData()
  }

  onClickCloseIcon = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderHomeBanner = () => (
    <HomeBannerImage data-testid="banner">
      <CloseBtnContainer>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseBtn
          type="button"
          onClick={this.onClickCloseIcon}
          data-testid="close"
        >
          <GrFormClose size={30} />
        </CloseBtn>
      </CloseBtnContainer>

      <HomeBannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </HomeBannerDescription>
      <HomeBannerBtn type="button">GET IT NOW</HomeBannerBtn>
    </HomeBannerImage>
  )

  getHomePageData = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const jwtToken = Cookies.get('jwt_token')

    console.log(jwtToken)

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
        videosData: updatedData,
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

  renderSuccessView = isDarkModeOn => {
    const {videosData} = this.state

    console.log('videoData', videosData)

    if (videosData.length === 0) {
      return (
        <NoSearchResultsView>
          <NoSearchResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoSearchResultsHeading isDarkModeActive={isDarkModeOn}>
            No Search results found
          </NoSearchResultsHeading>
          <NoSearchResultsDescription isDarkModeActive={isDarkModeOn}>
            Try different key words or remove search filter
          </NoSearchResultsDescription>
          <RetryBtn type="button" onClick={this.onClickRetryBtn}>
            Retry
          </RetryBtn>
        </NoSearchResultsView>
      )
    }

    return (
      <HomeVideosContainer>
        {videosData.map(eachVideo => (
          <HomeVideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </HomeVideosContainer>
    )
  }

  onClickRetryBtn = () => {
    this.getHomePageData()
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
      <RetryBtn type="button" onClick={this.onClickRetryBtn}>
        Retry
      </RetryBtn>
    </FailureViewContainer>
  )

  renderHomePageViews = isDarkModeOn => {
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

  onClickSearchIcon = () => {
    this.getHomePageData()
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <HomePageContainer
              isDarkModeActive={isDarkModeOn}
              data-testid="home"
            >
              <Header />
              <HomePageContent>
                <SideBar tabName="home" />
                <HomePageRightPart>
                  {showBanner && this.renderHomeBanner()}
                  <HomePageVideos isDarkModeActive={isDarkModeOn}>
                    <SearchBoxContainer>
                      <InputEl
                        isDarkModeActive={isDarkModeOn}
                        type="search"
                        onChange={this.onChangeSearchInput}
                        placeholder="Search"
                      />
                      <SearchIconContainer
                        type="button"
                        onClick={this.onClickSearchIcon}
                        isDarkModeActive={isDarkModeOn}
                        data-testid="searchButton"
                      >
                        <BiSearch
                          size={25}
                          style={{color: isDarkModeOn ? '#cccccc' : 'black'}}
                        />
                      </SearchIconContainer>
                    </SearchBoxContainer>
                    {this.renderHomePageViews(isDarkModeOn)}
                  </HomePageVideos>
                </HomePageRightPart>
              </HomePageContent>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
