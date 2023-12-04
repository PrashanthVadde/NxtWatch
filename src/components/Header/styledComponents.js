import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  font-family: 'Roboto';
  padding-top: 14px;
  padding-bottom: 20px;
  height: 9vh;
  background-color: ${props =>
    props.isDarkModeActive ? '#000000' : '#f1f1f1'};
`

export const NxtLogo = styled.img`
  height: 30px;
  width: 150px;
`

export const HeaderRightPartItems = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`

export const LogoutButton = styled.button`
  height: 36px;
  width: 100px;
  color: ${props => (props.isDarkModeActive ? '#ebebeb' : '#4f46e5')};
  font-size: 20px;
  font-weight: bold;
  border: 2px solid ${props => (props.isDarkModeActive ? '#ebebeb' : '#4f46e5')};
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  background-color: white;
  padding: 30px;
  background-color: ${props =>
    props.isDarkModeActive ? '#010101' : '#f9f9f9'};
  box-shadow: ${props =>
    props.isDarkModeActive ? '' : '0px 14px 16px 0px #bfbfbf'};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`

export const ButtonStyles = styled.button`
  color: #909090;
  height: 40px;
  width: 100px;
  border: 2px solid #909090;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const ConfirmButton = styled(ButtonStyles)`
  color: white;
  background-color: #3b82f6;
  border: none;
`

export const LogoutMsg = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f9f9f9' : '#424242')};
  font-size: 20px;
  font-weight: 500;
`
