import React, { useState } from 'react'
import Todolist from './Todolist'
import TodoItems from './TodoItems'

function Todolist1() {

    const [items, setItems] = useState([])

    const addItems = (inputProbs) => {
        setItems((prevItems) => {
            return [...prevItems, inputProbs]
            
        })
    }

    console.log(items,"items")

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index!== id
            })
        })
    }

  return (
    <div>
        <Todolist addItems= {addItems} />
        <div>
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <TodoItems key={index} text={item} deleteItem={deleteItem} id={index} />
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Todolist1