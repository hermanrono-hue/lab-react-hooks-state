import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({darkMode,setDarkMode}) => {

  return (
    <button className={styles.Button} onClick={()=>setDarkMode(!darkMode)}>Toggle {darkMode? 'Dark':'Light'} Mode</button>
  )
}

export default DarkModeToggle
