import React, { useReducer } from 'react'


const transactionReducer = (state, action) => {
    switch(action.type) {
        case "WITHDRAW" :
            return state - action.payload
        case "DEPOSIT" :
            return state + action.payload
        default: 
            return state ;
    }
}

function Reducers() {

    const withdraw = (amount) => {
        dispatch({ type: "WITHDRAW", payload: amount})
    }
    const deposit = (amount) => {
        dispatch({ type: "DEPOSIT", payload: amount})
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000)
    return (
        <>
        <p>{`balance is ${state}`} </p>
        <button onClick= {() =>withdraw(500)}> Withdraw</button>
        <button onClick= {() => deposit(500)}> Deposit</button>
        </>

    )
}

export default Reducers