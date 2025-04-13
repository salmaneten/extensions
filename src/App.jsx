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
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 hover:drop-shadow-xl transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 animate-spin-slow hover:drop-shadow-xl transition-all" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-center">
        Vite + React + <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>
      </h1>
      
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="w-full py-2 px-4 mb-4 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Count is {count}
        </button>
        <p className="text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Current theme: <span className="font-medium">{darkMode ? 'Dark' : 'Light'} Mode</span>
      </p>
    </div>
  )
}

export default App
