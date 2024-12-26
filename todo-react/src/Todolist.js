import React, { useState } from 'react'

function Todolist(probs) {

    const [inputText, setInputText] = useState("")

 
  return (
    <>
    <div>Todolist</div>
    <input
        type="text"
        value={inputText}
        placeholder="Add a new task..."
        onChange={(e) => setInputText(e.target.value)}
    />
    <button onClick={()=>{
        probs.addItems(inputText)
        setInputText("")
        }}
        >Add Task</button>
    </>
  )
}

export default Todolist