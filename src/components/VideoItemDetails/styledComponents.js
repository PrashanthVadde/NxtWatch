import styled from 'styled-components'

export const VideoDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f ' : '#f9f9f9'};
`

export const VideoDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 91vh;
`

export const VideoDetailItem = styled.div`
  background-color: ${props =>
    props.isDarkModeActive ? '#0f0f0f ' : '#f9f9f9'};
  padding: 26px;

  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: column;
  min-width: 80%;
  max-height: 91vh;
  overflow-y: scroll;
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

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
`

export const Title = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#313131')};
  font-size: 26px;
  font-weight: 500;
`

export const ViewCount = styled.p`
  color: #909090;
  font-size: 18px;
  font-weight: 500;
`

export const ViewsAndButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26%;
`

export const LikeButton = styled.button`
  color: ${props => (props.isActiveLikeButton ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;

  display: flex;
  align-items: center;
`

export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.isActiveDisLikeButton ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled(LikeButton)`
  color: ${props => (props.isActiveSaveButton ? '#2563eb' : '#64748b')};
`

export const ProfileImageAndContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  color: ${props => (props.isDarkModeActive ? '#f4f4f4' : '#212121')};
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
`

export const SubscribersCount = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
`

export const Description = styled.p`
  color: ${props => (props.isDarkModeActive ? '#ebebeb' : '#383838')};
  font-size: 17px;
`
