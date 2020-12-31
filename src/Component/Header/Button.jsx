import React from 'react'
import classNames from 'classnames'



const Button = ({onClick, outline, className, children}) => {
    return (
        <button onClick={onClick}
                className={classNames('button', className, {
                    'button--outline' : outline,
                })}>
            {/*<span>520 ₽</span>*/}
            {children}
        </button>
    )
}

export default Button;