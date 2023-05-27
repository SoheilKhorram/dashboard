import React, { createContext, useContext, useState } from 'react'

export const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => { return useContext(StateContext) }