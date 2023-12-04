import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 280px;
`

export const ThumbnailImage = styled.img`
  height: 170px;
  width: 280px;
  margin-bottom: 12px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const ContentRightPart = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkModeActive ? '#ebebeb' : '#383838')};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkModeActive ? '#cccccc' : '#383838')};
  font-size: 16px;
  font-weight: 400;
  margin-top: 2px;
  margin-bottom: 5px;
`

export const ViewsCountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`

export const ViewsCount = styled.p`
  color: ${props => (props.isDarkModeActive ? '#cccccc' : '#383838')};
  font-size: 14px;
  font-weight: 400;
  margin-top: 0;
`
