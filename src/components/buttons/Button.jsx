import React from 'react';
import PropTypes from 'prop-types'
// import { ReactPropTypes } from 'react';

const Button = (props) => {
    return (
        <button 
            className={`btn ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null }
        >
            {props.children}
        </button>
    )
}

export const ALink = (props) => {
    console.log(props.link)
    return (
        <a href={props.link}
            className={`btn btn-outline ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null }
        >
            {props.children}
        </a>
    )
}

export const OulineButton = props => {

    return (
        <Button 
            className={`btn-outline ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null }
        >
            {props.children}
        </Button>
    )
}

// export const OulineALink = props => {

//     return (
//         <ALink 
//             className={`btn-outline ${props.className}`} 
//             onClick={props.onClick ? () => props.onClick() : null }
//         >
//             {props.children}
//         </ALink>
//     )
// }

Button.prototype = {
    onclick: PropTypes.func
}

ALink.prototype = {
    onclick: PropTypes.func
}

export default Button
