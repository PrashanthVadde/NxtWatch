import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 90vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#212121' : '#f8fafc'};
`

export const TabsPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#f8fafc'};
`

export const HomeTabContainer = styled.div`
  background-color: ${props => {
    if (props.btnStatus === 'home' && props.isDarkModeActive === true) {
      return '#424242'
    }
    if (props.btnStatus === 'home' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'home' && props.isDarkModeActive === true) {
      return '#212121'
    }
    return '#f8fafc'
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding: 10px;
  margin: 0;
`

export const TrendingTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'trending' && props.isDarkModeActive === true) {
      return '#424242'
    }
    if (props.btnStatus === 'trending' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'trending' && props.isDarkModeActive === true) {
      return '#212121'
    }
    return '#f8fafc'
  }};
`

export const GamingTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === true) {
      return '#424242'
    }
    if (props.btnStatus === 'gaming' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'gaming' && props.isDarkModeActive === true) {
      return '#212121'
    }
    return '#f8fafc'
  }};
`

export const SavedVideosTabContainer = styled(HomeTabContainer)`
  background-color: ${props => {
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === true) {
      return '#424242'
    }
    if (props.btnStatus === 'savedVideos' && props.isDarkModeActive === false) {
      return '#d7dfe9'
    }
    if (props.btnStatus !== 'savedVideos' && props.isDarkModeActive === true) {
      return '#212121'
    }
    return '#f8fafc'
  }};
`

export const HomeSpanEl = styled.span`
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
  margin-left: 30px;
  margin-top: 0;
`

export const TrendingSpanEl = styled.span`
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
export const GamingSpanEl = styled.span`
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

export const SavedVideosSpanEl = styled.span`
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
  margin: 0;
  padding: 0;
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
