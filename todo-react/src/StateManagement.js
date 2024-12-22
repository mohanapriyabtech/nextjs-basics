import React, { useState } from 'react'

function StateManagement() {

    // let user = "john";
    const [ user, setUser] = useState('John')
    const [ counter, setCounter] = useState(1)

    const changeName = () => {
        // user = "js"
        setUser("Js")
        console.log(user,"user")
    }


    const increment = () => {
        setCounter(prev => prev+1)
    }


    const decrement = () => {
        setCounter(prev => prev-1)
    }

  return (
    <>
       <p>{user}</p>
       <button onClick={changeName}>ChangeName</button>

       <p> COUNTER value: {counter}</p>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
    </>
 
  )
}

export default StateManagement