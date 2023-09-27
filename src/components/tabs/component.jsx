import React from 'react'
import ReactDOM from 'react-dom/client'

export const Tabs = ({value, onClick}) => {

    return (
        <div>
            <button onClick={onClick} type='button'>{value}</button>
        </div>
    )
}