import React from 'react'

import {createContext} from 'react'



export const StyleContext = createContext()

const StyleProvider = ({children}) => {

    let data = {
        
    }

    return (
    <StyleContext.Provider value={data}>
        {children}
    </StyleContext.Provider>
    )
}

export default StyleProvider