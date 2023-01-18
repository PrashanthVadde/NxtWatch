import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import SavedVideoItem from '../SavedVideoItem'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosPageContainer,
  SavedVideosContent,
  SavedVideosRightPart,
  SavedVideoBanner,
  FireContainer,
  SavedVideosBannerHeading,
  NoVideosPageContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  SavedVideosContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideosView = isDarkModeOn => (
    <NoVideosPageContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHeading isDarkModeActive={isDarkModeOn}>
        No saved videos found
      </NoVideosHeading>
      <NoVideosDescription isDarkModeActive={isDarkModeOn}>
        You can save your videos while watching them
      </NoVideosDescription>
    </NoVideosPageContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeOn, savedVideosData} = value

          return (
            <SavedVideosPageContainer
              isDarkModeActive={isDarkModeOn}
              data-testid="savedVideos"
            >
              <Header />
              <SavedVideosContent>
                <SideBar tabName="savedVideos" />
                <SavedVideosRightPart>
                  {savedVideosData.length === 0 ? (
                    this.renderNoVideosView(isDarkModeOn)
                  ) : (
                    <>
                      <SavedVideoBanner
                        isDarkModeActive={isDarkModeOn}
                        data-testid="banner"
                      >
                        <FireContainer isDarkModeActive={isDarkModeOn}>
                          <HiFire size={40} style={{color: '#ff0000'}} />
                        </FireContainer>

                        <SavedVideosBannerHeading
                          isDarkModeActive={isDarkModeOn}
                        >
                          Saved Videos
                        </SavedVideosBannerHeading>
                      </SavedVideoBanner>

                      <SavedVideosContainer isDarkModeActive={isDarkModeOn}>
                        {savedVideosData.map(eachVideoItem => (
                          <SavedVideoItem
                            key={eachVideoItem.id}
                            videoDetails={eachVideoItem}
                          />
                        ))}
                      </SavedVideosContainer>
                    </>
                  )}
                </SavedVideosRightPart>
              </SavedVideosContent>
            </SavedVideosPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
