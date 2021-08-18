import { createContext, useContext, useEffect, useRef, useState } from "react";

const appContext = createContext()

const ContextProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [input, setInput] = useState('')
    const [isEditing, setIsEditing] = useState({state: false, index: null})
    const [modalContent, setModalContent] = useState('')
    
    const inputRef = useRef(null)


    //Taking items from localStorage during initial mounting
    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem('items'))
        setItems(storedItems)
    }, [])


    //Adding items to localStorage whenever items gets changed
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])


    const handleSubmit = (e) =>{

        e.preventDefault()

        //Code to handleSubmit during editing the item
        if(isEditing.state){

            if(input){

                const editedItems = items.map((item, index)=>{
                    if(isEditing.index === index){
                        return input
                    }

                    return item
                })

                setItems(editedItems)
                setIsEditing({state: false, index: null})
                setInput('')
                inputRef.current.blur()
                setModalContent('Item edited successfully')

                }else{

                    setModalContent('Please enter something to edit')
            }

            return

        }

        //Code to add items to array
        if(input){

            setItems(prev => [...prev, input])
            setModalContent('Item added successfully')

        }else{

            //Setting message if there is no input
            setModalContent('No input is given')

        }
        setInput('')
    }


    const deleteItem = (itemIndex) => {

        const filteredItems = items.filter((item, index)=>index!==itemIndex)
        setItems(filteredItems)
        setModalContent('Item deleted successfully')

    }

    const editItem = (itemIndex) =>{

        const editingItem = items.find((item, index)=>index === itemIndex)
        setInput(editingItem)
        inputRef.current.focus()
        setIsEditing({state: true, index: itemIndex})

    }

    return (<appContext.Provider value={{handleSubmit, items, input, setInput, deleteItem, editItem, 
                inputRef, isEditing, modalContent, setModalContent}}>

                {children}

            </appContext.Provider>
    )
}

//Custom hook to call useContext
const useGlobalContext = () =>{
    return useContext(appContext)
}

export {useGlobalContext, ContextProvider}