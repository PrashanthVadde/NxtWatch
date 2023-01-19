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
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GamingVideo>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoTitle isDarkModeActive={isDarkModeOn}>
                {title}
              </GamingVideoTitle>
              <GamingVideViewCount isDarkModeActive={isDarkModeOn}>
                {viewCount} Watching Worldwide
              </GamingVideViewCount>
            </GamingVideo>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
