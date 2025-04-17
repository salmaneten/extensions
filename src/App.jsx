import ExtensionBar from './components/ExtensionBar'
import { useTheme } from './contexts/ThemeContext'
import ExtensionsList from './components/ExtensionsList';


function App() {
  const { darkMode } = useTheme()

  return (
    <div className=' min-h-screen bg-light-gradient dark:bg-dark-gradient pt-7 pb-10'>
    <ExtensionBar/>
    <ExtensionsList/>
    </div>
  )
}
export default App
