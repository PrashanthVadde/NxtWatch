import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItem,
  ThumbnailImage,
  VideoContentContainer,
  ProfileImage,
  ContentRightPart,
  VideoTitle,
  ChannelName,
  ViewsCountContainer,
  ViewsCount,
} from './styledComponents'

const HomeVideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    publishedAt,
    channel,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentRightPart>
                  <VideoTitle isDarkModeActive={isDarkModeOn}>
                    {title}
                  </VideoTitle>
                  <ChannelName isDarkModeActive={isDarkModeOn}>
                    {name}
                  </ChannelName>
                  <ViewsCountContainer>
                    <ViewsCount isDarkModeActive={isDarkModeOn}>
                      {viewCount} views . <p>{time}</p>
                    </ViewsCount>
                  </ViewsCountContainer>
                </ContentRightPart>
              </VideoContentContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoItem
