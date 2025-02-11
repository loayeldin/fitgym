import React, { useEffect, useState } from 'react'

function ToggleTheme() {
    const [isDarkMode,setIsDarkMode] = useState(true)
    useEffect(()=>{
        if(!isDarkMode){
            document.documentElement.classList.add("light")
        }else{
            document.documentElement.classList.remove("light")
        }
    },[isDarkMode])
  return (
    <button onClick={()=> setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'light' : 'dark'}
    </button>
  )
}

export default ToggleTheme