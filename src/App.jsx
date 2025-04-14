import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExtensionBar from './components/ExtensionBar'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { darkMode } = useTheme()

  return (
    <div className='min-h-screen bg-light-gradient dark:bg-dark-gradient pt-7'>
    <ExtensionBar/>    
    </div>
  )
}
export default App
