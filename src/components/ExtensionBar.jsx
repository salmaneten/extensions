import React from 'react'
import logoSrc from '../assets/logo.svg';
import logoDarkMpdeSrc from '../assets/logo-dark-mode.svg';
import moonIconSrc from '../assets/icon-moon.svg';
import sunIconSrc from '../assets/icon-sun.svg';
import { useTheme } from '../contexts/ThemeContext';


const ExtensionBar = () => {
    const  { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex justify-between max-w-7xl mx-auto max-[375px]:mx-6 max-[375px]:px-3 lg:px-3 py-3 shadow-md bg-neutral-0 dark:bg-neutral-800 rounded-2xl">
      <img src={darkMode? logoDarkMpdeSrc : logoSrc}/>
      <button onClick={toggleDarkMode}>
      {darkMode? 
         (<img src={sunIconSrc} className="p-3 bg-neutral-700 rounded-xl" />) :
         (<img src={moonIconSrc} className="p-3 bg-neutral-100 rounded-xl" />) 
      }     
      </button>
    </div>
  )
}

export default ExtensionBar
