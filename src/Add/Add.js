import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
    return (
        <div>        
            <from>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="fname" value="John"/>
                <input type="submit" value="Submit" />
                <Link to='/'>Cancel</Link>
            </from>
        </div>
    )
}

export default Add
