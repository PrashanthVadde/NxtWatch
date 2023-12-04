import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailPageContainer,
  VideoDetailContent,
  VideoDetailItem,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryBrn,
  VideoDetailsContainer,
  Title,
  ViewCount,
  ViewsAndButtonsContainer,
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  ProfileImageAndContent,
  ProfileImage,
  Content,
  Name,
  SubscribersCount,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetail extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    activeLikeButton: false,
    activeDislikeButton: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

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

      console.log(fetchedData)

      const updatedData = {
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscribersCount: fetchedData.video_details.channel.subscriber_count,
        },
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        description: fetchedData.video_details.description,
      }

      console.log(updatedData)

      this.setState({
        videoDetails: updatedData,
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

  onClickLikeButton = () => {
    this.setState(prevState => ({
      activeLikeButton: !prevState.activeLikeButton,
      activeDislikeButton: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      activeDislikeButton: !prevState.activeDislikeButton,
      activeLikeButton: false,
    }))
  }

  renderSuccessView = () => {
    const {videoDetails, activeLikeButton, activeDislikeButton} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscribersCount} = channel

    const time = formatDistanceToNow(new Date(publishedAt))

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn, updateSavedVideosData, savedVideosData} = value

          console.log('Saved Videos Data ', savedVideosData)

          const filteredList = savedVideosData.filter(
            eachVideo => eachVideo.id === id,
          )

          const isThisVideoSaved = filteredList.length > 0

          const onClickSaveButton = () => {
            updateSavedVideosData(videoDetails)
            console.log('Clicked on Save Button @ @ @ @ @ ')
          }

          return (
            <VideoDetailsContainer>
              <ReactPlayer url={videoUrl} height="500px" width="100%" />
              <Title isDarkModeActive={isDarkModeOn}>{title}</Title>

              <ViewsAndButtonsContainer>
                <ViewCount>
                  {viewCount} views . {time}
                </ViewCount>

                <ButtonsContainer>
                  <LikeButton
                    type="button"
                    onClick={this.onClickLikeButton}
                    isActiveLikeButton={activeLikeButton}
                  >
                    <BiLike size={25} style={{marginRight: 4}} /> Like
                  </LikeButton>

                  <DisLikeButton
                    type="button"
                    onClick={this.onClickDislikeButton}
                    isActiveDisLikeButton={activeDislikeButton}
                  >
                    <BiDislike size={25} style={{marginRight: 4}} /> Dislike
                  </DisLikeButton>

                  <SaveButton
                    type="button"
                    onClick={onClickSaveButton}
                    isActiveSaveButton={isThisVideoSaved}
                  >
                    <BiListPlus size={25} style={{marginRight: 4}} />{' '}
                    {isThisVideoSaved ? 'Saved' : 'Save'}
                  </SaveButton>
                </ButtonsContainer>
              </ViewsAndButtonsContainer>

              <hr style={{width: '100%'}} />
              <ProfileImageAndContent>
                <ProfileImage src={profileImageUrl} alt="channel logo" />

                <Content>
                  <Name isDarkModeActive={isDarkModeOn}>{name}</Name>
                  <SubscribersCount>
                    {subscribersCount} subscribers
                  </SubscribersCount>
                  <Description isDarkModeActive={isDarkModeOn}>
                    {description}
                  </Description>
                </Content>
              </ProfileImageAndContent>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onClickRetryBtn = () => {
    this.getVideoDetails()
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

  VideoDetailPageViews = isDarkModeOn => {
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
            <VideoDetailPageContainer
              isDarkModeActive={isDarkModeOn}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailContent>
                <SideBar tabName="none" />
                <VideoDetailItem isDarkModeActive={isDarkModeOn}>
                  {this.VideoDetailPageViews(isDarkModeOn)}
                </VideoDetailItem>
              </VideoDetailContent>
            </VideoDetailPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetail
