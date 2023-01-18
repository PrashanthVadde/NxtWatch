import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideo,
  TrendingVideoThumbnail,
  TrendingVideoContentContainer,
  Title,
  ChannelName,
  ViewsAndTime,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    publishedAt,
    channel,
    viewCount,
  } = videoDetails
  const {name} = channel

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value

        return (
          <TrendingVideo>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <TrendingVideoThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoContentContainer>
                <Title isDarkModeActive={isDarkModeOn}>{title}</Title>
                <ChannelName isDarkModeActive={isDarkModeOn}>
                  {name}
                </ChannelName>
                <ViewsAndTime isDarkModeActive={isDarkModeOn}>
                  {viewCount} views . {time}
                </ViewsAndTime>
              </TrendingVideoContentContainer>
            </Link>
          </TrendingVideo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem
