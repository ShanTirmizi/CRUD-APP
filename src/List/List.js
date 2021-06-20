import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <div>
            <h1>Sample</h1>
            <Link to='/Edit/1'>Edit</Link>
            <button>Delete</button>
            
        </div>
    )
}

export default List
