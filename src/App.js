import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetail from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkModeOn: false,
    savedVideosData: [],
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkModeOn: !prevState.isDarkModeOn}))
  }

  updateSavedVideosData = videoDetails => {
    const {savedVideosData} = this.state

    if (savedVideosData.length === 0) {
      this.setState({savedVideosData: [videoDetails]})
    } else {
      const filterList = savedVideosData.filter(
        eachVideo => eachVideo.id === videoDetails.id,
      )

      if (filterList.length === 0) {
        this.setState(prevState => ({
          savedVideosData: [...prevState.savedVideosData, videoDetails],
        }))
      } else {
        const updatedVideosData = savedVideosData.filter(
          each => each.id !== videoDetails.id,
        )

        this.setState({savedVideosData: [...updatedVideosData]})
      }
    }
  }

  render() {
    const {isDarkModeOn, savedVideosData} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkModeOn,
          onToggleTheme: this.onToggleTheme,
          savedVideosData,
          updateSavedVideosData: this.updateSavedVideosData,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetail}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
