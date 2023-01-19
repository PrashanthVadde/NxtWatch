import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#ffffff'};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: white;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.isDarkModeActive ? '#181818' : '#bfbfbf')};
  background-color: ${props =>
    props.isDarkModeActive ? '#181818' : '#f9f9f9'};
`

export const LoginImage = styled.img`
  height: 50px;
  width: 240px;
  margin-bottom: 50px;
  align-self: center;
`

export const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyles = styled.label`
  color: ${props => (props.isDarkModeActive ? '#f9f9f9' : '#606060')};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
`

export const InputStyles = styled.input`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#010101')};
  height: 42px;
  padding: 6px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 300px;
  margin-bottom: 24px;
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#ffffff'};
`

export const ShowPassword = styled.label`
  color: ${props => (props.isDarkModeActive ? '#f9f9f9' : '#000000')};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 18px;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`
