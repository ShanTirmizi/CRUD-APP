import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
    return (
        <div>
            <from>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="fname" value="John"/>
                <input type="submit" value="Edit Name" />
                <Link to='/'>Cancel</Link>
            </from>
        </div>
    )
}

export default Edit
