import styled from 'styled-components'

export const GamingVideo = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family: 'Roboto';
`

export const ThumbnailImage = styled.img`
  height: 360px;
  width: 300px;
`

export const GamingVideoTitle = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#313131')};
  font-size: 18px;
  font-weight: 500;
`

export const GamingVideViewCount = styled.p`
  color: ${props => (props.isDarkModeActive ? '#909090' : '#606060')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
`
