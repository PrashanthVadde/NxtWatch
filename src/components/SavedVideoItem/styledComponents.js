import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  font-family: 'Roboto';
`

export const ThumbnailUrl = styled.img`
  height: 260px;
  width: 440px;
  margin-right: 20px;
`

export const VideoItemTextContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#231f20')};
  font-size: 28px;
  font-weight: 500;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkModeActive ? ' #cbd5e1' : '#383838')};

  font-size: 18px;
  font-weight: 400;
`

export const ViewsCount = styled(ChannelName)`
  font-size: 16px;
`
