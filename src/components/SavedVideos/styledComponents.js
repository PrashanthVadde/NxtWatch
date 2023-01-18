import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f' : '#f9f9f9'};
`

export const SavedVideosContent = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 91vh;
`

export const SavedVideosRightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SavedVideoBanner = styled.div`
  min-height: 16vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkModeActive ? '#231f20' : '#ebebeb'};
  padding-left: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FireContainer = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${props =>
    props.isDarkModeActive ? '#010101' : '#cbd5e1'};
  border-radius: 30px;
  margin-right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SavedVideosBannerHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#cbd5e1' : '#010101')};
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`

export const NoVideosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  align-items: center;
`
export const NoVideosImage = styled.img`
  height: 400px;
  width: 500px;
`

export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#231f20')};
  font-size: 30px;
  font-weight: 600;
`

export const NoVideosDescription = styled.p`
  color: ${props => (props.isDarkModeActive ? '#cccccc' : '#616e7c')};
  font-size: 17px;
  font-weight: 400;
`
export const SavedVideosContainer = styled.ul`
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f' : '#f9f9f9'};
  padding: 20px;
  list-style-type: none;
  margin: 0;
`
