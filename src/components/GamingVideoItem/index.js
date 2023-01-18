import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingVideo,
  ThumbnailImage,
  GamingVideoTitle,
  GamingVideViewCount,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeOn} = value

        return (
          <GamingVideo>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoTitle isDarkModeActive={isDarkModeOn}>
                {title}
              </GamingVideoTitle>
              <GamingVideViewCount isDarkModeActive={isDarkModeOn}>
                {viewCount} Watching Worldwide
              </GamingVideViewCount>
            </Link>
          </GamingVideo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
