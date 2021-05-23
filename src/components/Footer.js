import React from 'react'

export const Footer = () => {
    let footercss = {
        'text-align': 'center', 
        'position': 'relative',
        'width': '100%',
        'top' : '70vh'
    }
    return (
        <div className='bg-dark text-light py-3' style={footercss}>
            copyright &copy; Todo
        </div>
    )
}
