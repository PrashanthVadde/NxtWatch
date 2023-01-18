import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#f9f9f9'};
`

export const NotFoundPageContent = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 91vh;
`

export const NotFoundPageRightPart = styled.div`
  background-color: ${props =>
    props.isDarkModeActive ? '#010101' : '#f9f9f9'};
  padding: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80%;
`

export const NotFoundPageImage = styled.img`
  height: 400px;
  width: 400px;
`

export const NotFoundPageHeading = styled.h1`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#212121')};
  font-size: 32px;
  font-weight: 600;
`

export const NotFoundPageDescription = styled.p`
  color: ${props => (props.isDarkModeActive ? '#d7dfe9' : '#64748b')};
`
