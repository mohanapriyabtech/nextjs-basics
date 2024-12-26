import React, { useState } from 'react'

function Toggle() {
    const [ colour, setColour] = useState('white')

    const changeColour = () => {

        console.log(colour,"colour")

        setColour((prevTheme) => (prevTheme === 'white' ? 'black' : 'white'));

        console.log(colour,"colour")
      
    }

  return (
    <>
        <div style={{
            backgroundColor: colour === 'white' ? 'white' : 'black',
           
            padding: '20px',
            }}
        >
        {colour}</div>
        <button onClick={() => changeColour()}>ChangeColour</button>
    </>
  )
}

export default Toggle