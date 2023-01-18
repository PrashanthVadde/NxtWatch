import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#181818' : '#f9f9f9'};
`

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 91vh;
`

export const HomePageRightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HomeBannerImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 28vh;
  width: 100%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 10px;
`

export const NxtWatchLogo = styled.img`
  height: 36px;
  width: 180px;
`

export const HomeBannerDescription = styled.p`
  color: #606060;
  font-size: 26px;
  font-weight: 500;
`

export const HomeBannerBtn = styled.button`
  height: 46px;
  width: 140px;
  border: 2px solid #606060;
  color: #606060;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  outline: none;
  margin-top: 20px;
`

export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 60px;
`

export const HomePageVideos = styled.div`
  padding: 20px;
  background-color: ${props =>
    props.isDarkModeActive ? '#181818' : '#f9f9f9'};
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputEl = styled.input`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#010101')};
  background-color: ${props =>
    props.isDarkModeActive ? '#010101' : '#f9f9f9'};
  height: 36px;
  width: 400px;
  border: 2px solid #606060;
  font-size: 18px;
  outline: none;
  padding-left: 6px;
`

export const SearchIconContainer = styled.button`
  height: 36px;
  width: 60px;
  border: 2px solid #606060;
  border-left: none;
  background-color: ${props =>
    props.isDarkModeActive ? '#424242' : '#d7dfe9'};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`

export const HomeVideosContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FailureViewImage = styled.img`
  height: 250px;
  width: 280px;
  margin-top: 12px;
`

export const FailureViewHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#1e293b')};
  color: #1e293b;
  font-size: 28px;
  font-weight: 600;
  margin-top: 0;
`

export const FailureViewDescription = styled.p`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#606060')};

  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`

export const RetryBtn = styled.button`
  color: #f9f9f9;
  background-color: #4f46e5;
  height: 36px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 8px;
`

export const NoSearchResultsView = styled(FailureViewContainer)`
  font-family: 'Roboto';
`

export const NoSearchResultsImage = styled.img`
  height: 250px;
  width: 300px;
  margin-top: 12px;
`

export const NoSearchResultsHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#1e293b')};
  font-size: 28px;
  font-weight: 600;
`

export const NoSearchResultsDescription = styled.p`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#606060')};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`
