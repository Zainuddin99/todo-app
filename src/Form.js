import React from 'react'
import { useGlobalContext } from './context'

function Form() {
    const {handleSubmit, input, setInput, inputRef, isEditing} = useGlobalContext()

    return (

        <form onSubmit={handleSubmit} className={isEditing.state ? 'editing' : ''}>

            <input type="text" placeholder="Enter items to be added" value={input} onChange={(e)=>{setInput(e.target.value)}} ref={inputRef}/>
            <button type="submit">{isEditing.state ? 'EDIT' : 'ADD'}</button>

        </form>

    )
}

export default Form
