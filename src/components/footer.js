import React from 'react'
import footerStyles from '../styles/footer.module.scss'
import Social from './social'

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.container}>
                <Social />
            </div>
        </footer>
    )
}

export default Footer