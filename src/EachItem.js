import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import { useGlobalContext } from './context'

function EachItem({index, item}) {
    const {deleteItem, editItem} = useGlobalContext()

    return (
        <li>

            <div>{index+1+'.  '+item}</div>

                <div className="icons">
                    <BiEditAlt onClick={()=>editItem(index)}/>
                    <FaTrash onClick={()=>deleteItem(index)}/>
                </div>

        </li>
    )
}

export default EachItem
