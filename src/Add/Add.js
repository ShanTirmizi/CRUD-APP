import React, { useReducer, useState } from 'react'
import { Link, Switch } from 'react-router-dom'

const ACTIONS = {
    ADD_LIST_ITEM: 'add-list-item'
}

const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.ADD_LIST_ITEM:
            return [...lists, newList(action.payload.name)] 
    }
}

const newList = (name) => {
    return { id: Date.now(), name: name, complete: false }
}

const Add = () => {
    const [lists, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_LIST_ITEM, payload: {name: name} })
        setName('')
    }

    console.log(lists)
    return (
        <div>        
            <form onSubmit={handleChange}>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="fname" value={name} onChange={e => setName(e.target.value)}/>
                <input type="submit" value="Submit" />
                <Link to='/'>Cancel</Link>
            </form>
        </div>
    )
}

export default Add
