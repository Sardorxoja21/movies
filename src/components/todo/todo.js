import React, { useState } from 'react'
import '../todo/todo.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiLike } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'



const Todo = () => {

    const [input1, setinput1] = useState("");
    const dispatch = useDispatch()

    const data = useSelector(state => state)

    const Add = () => {
        const action = { type: "Add", payload: { soz: input1 } };
        dispatch(action)

        console.log(input1);
    }

    console.log("data", data);

    
    return (
        <div className='container'>
            <div className="todo">
                <div className='container'>
                    <div id="New">
                        <input type="text" className='Myinput' placeholder='soz' onInput={(v) => setinput1(v.target.value)} />
                        <button id='bos' onClick={() => Add()}>Add</button>
                    </div>

                    <ul className='Task2'>
                        <li>
                            <p>hello</p>
                            <div className="button9">
                                <button className='like1'><span></span></button>
                                <button className='del' ><span></span></button>
                            </div>
                        </li>
                    </ul>

                    

                </div>


            </div>
        </div>
    )
}

export default Todo