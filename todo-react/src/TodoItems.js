import React from 'react'

function TodoItems(props) {

  return (
    <>
        <div onClick={()=> {props.deleteItem(props.id)}}>
            <li>{props.text}</li>
        </div>
    </>
  )
}

export default TodoItems