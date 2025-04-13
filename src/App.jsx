import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const { darkMode } = useTheme()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors">
      Salmane zerradi
    </div>
  )
}

export default App
