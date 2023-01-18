import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 90vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f' : '#ffffff'};
`

export const TabsPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#ffffff'};
`

export const HomeTabContainer = styled.div`
  background-color: ${props => {
    if (props.btnStatus === 'home' && props.isDarkModeActive === true) {
      return '#313131'
    }
    if (props.btnStatus === 'home' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'home' && props.isDarkModeActive === true) {
      return '#0f0f0f'
    }
    return 'white'
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`

export const TrendingTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'trending' && props.isDarkModeActive === true) {
      return '#313131'
    }
    if (props.btnStatus === 'trending' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'trending' && props.isDarkModeActive === true) {
      return '#0f0f0f'
    }
    return 'white'
  }};
`

export const GamingTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === true) {
      return '#313131'
    }
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'gaming' && props.isDarkModeActive === true) {
      return '#0f0f0f'
    }
    return 'white'
  }};
`

export const SavedVideosTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === true) {
      return '#313131'
    }
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'savedVideos' && props.isDarkModeActive === true) {
      return '#0f0f0f'
    }
    return 'white'
  }};
`

export const HomeTabText = styled.h1`
  color: ${props => {
    if (props.btnStatus === 'home' && props.isDarkModeActive === true) {
      return '#f9f9f9'
    }
    if (props.btnStatus === 'home' && props.isDarkModeActive === false) {
      return '#000000'
    }
    if (props.btnStatus !== 'home' && props.isDarkModeActive === true) {
      return '#d7dfe9'
    }
    return '#606060'
  }};
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`

export const TrendingTabText = styled.h1`
  color: ${props => {
    if (props.btnStatus === 'trending' && props.isDarkModeActive === true) {
      return '#f9f9f9'
    }
    if (props.btnStatus === 'trending' && props.isDarkModeActive === false) {
      return '#000000'
    }
    if (props.btnStatus !== 'trending' && props.isDarkModeActive === true) {
      return '#d7dfe9'
    }
    return '#606060'
  }};
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`
export const GamingTabText = styled.h1`
  color: ${props => {
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === true) {
      return '#f9f9f9'
    }
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === false) {
      return '#000000'
    }
    if (props.btnStatus !== 'gaming' && props.isDarkModeActive === true) {
      return '#d7dfe9'
    }
    return '#606060'
  }};
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`

export const SavedTabText = styled.h1`
  color: ${props => {
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === true) {
      return '#f9f9f9'
    }
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === false) {
      return '#000000'
    }
    if (props.btnStatus !== 'savedVideos' && props.isDarkModeActive === true) {
      return '#d7dfe9'
    }
    return '#606060'
  }};
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`

export const HomeBtn = styled.div`
  color: ${props => (props.btnStatus === 'home' ? '#ff0000' : '#7e858e')};
`

export const FireBtn = styled.div`
  color: ${props => (props.btnStatus === 'trending' ? '#ff0000' : '#7e858e')};
`

export const GameBtn = styled.div`
  color: ${props => (props.btnStatus === 'gaming' ? '#ff0000' : '#7e858e')};
`

export const SavedVideoBtn = styled.div`
  color: ${props =>
    props.btnStatus === 'savedVideos' ? '#ff0000' : '#7e858e'};
`

export const BottomPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f8fafc' : '#424242')};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const IconsPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;
`

export const BottomPartDescription = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f8fafc' : '#424242')};
  font-size: 20px;
  font-weight: 500;
`
