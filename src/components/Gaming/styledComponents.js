import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f ' : '#f9f9f9'};
`

export const GamePageContent = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 91vh;
`

export const GamingPageRightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GamingPageBanner = styled.div`
  min-height: 16vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkModeActive ? '#231f20' : '#ebebeb'};
  padding-left: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GameLogoContainer = styled.div`
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

export const GamingBannerHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#cbd5e1' : '#010101')};
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`

export const GamingVideoContainer = styled.div`
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f ' : '#f9f9f9'};
  padding: 26px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
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

export const RetryBrn = styled.button`
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

export const GamingVideoListContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
