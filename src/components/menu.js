import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
    const activeStyle = {
       borderTop: '2px solid #ffffff'

    }
    return (
        <ul>
            <h2>
                <li>
                    <Link to={'/'} activeStyle={activeStyle}>HOME</Link>
                </li>
            </h2>
            <h2>
                <li>
                    <Link to={'/info'} activeStyle={activeStyle}>INFORMATION</Link>
                </li>
            </h2>
            
            {/* <li>
                <Link to={'/contact'} activeStyle={activeStyle}>CONTACT</Link>
            </li> */}
        </ul>
    )
}

export default Menu