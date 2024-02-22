import React from 'react'
import Logo from '../Images/clam-logo-no-bg.png'

export default function Header() {
    return(
        <div className='header--body'>
            <div className='header--left'>
                <img className='header--logo' src={Logo} />
                <h2 className='header--logo-text'>Project Mollusk</h2>
            </div>
            <div className='header--right'>
                <h3>Solana Tx Visualizer</h3>
            </div>
        </div>
    )
}
