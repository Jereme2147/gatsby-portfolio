import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
    const activeStyle = {
        borderLeft: '2px solid rgba(255, 255, 255, 1)',
        borderRight: '2px solid rgba(255, 255, 255, 1)',
        margin: '0'

    }
    return (
        <ul>
            <li>
                <Link to={'/'} activeStyle={activeStyle}>HOME</Link>
            </li>
            <li>
                <Link to={'/info'} activeStyle={activeStyle}>INFORMATION</Link>
            </li>
            {/* <li>
                <Link to={'/contact'} activeStyle={activeStyle}>CONTACT</Link>
            </li> */}
        </ul>
    )
}

export default Menu