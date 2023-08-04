import React from 'react'
import { Link } from "react-scroll";


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES =  ['btn--primary', 'btn--outline'];

export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes (buttonSize)? buttonSize : SIZES[0]

   return (
    <Link to='contact' className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onclick={onclick}
        type='type'
        >
            {children}
        </button>
    </Link>
   ); 
};
