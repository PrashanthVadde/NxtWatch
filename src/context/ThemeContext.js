import React from 'react'

const ThemeContext = React.createContext({
  isDarkModeOn: true,
  onToggleTheme: () => {},
  savedVideosData: [],
  updateSavedVideosData: () => {},
})

export default ThemeContext
