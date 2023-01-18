import styled from 'styled-components'

export const TrendingVideo = styled.li`
  display: flex;
  font-family: 'Roboto';
  margin-bottom: 12px;
`

export const TrendingVideoThumbnail = styled.img`
  height: 300px;
  width: 500px;
  margin-right: 20px;
`

export const TrendingVideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#1e293b')};
  font-size: 28px;
  font-weight: 600;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#606060')};
  font-size: 18px;
  font-weight: 500;
`

export const ViewsAndTime = styled(ChannelName)`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#606060')};
  font-size: 15px;
`
