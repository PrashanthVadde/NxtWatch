import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItem,
  ThumbnailUrl,
  VideoItemTextContent,
  Title,
  ChannelName,
  ViewsCount,
} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails
  const {name} = channel

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItem>
              <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemTextContent>
                <Title isDarkModeActive={isDarkModeOn}>{title}</Title>
                <ChannelName isDarkModeActive={isDarkModeOn}>
                  {name}
                </ChannelName>
                <ViewsCount isDarkModeActive={isDarkModeOn}>
                  {viewCount} views . {time}
                </ViewsCount>
              </VideoItemTextContent>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
