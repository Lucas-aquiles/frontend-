import React, { createContext, useState } from "react";


export const DataContexto = createContext();

const dataProveida = { datos: false }

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataProveida)
    return (
        <DataContexto.Provider value={{
            data, setData
        }}>

            {children}
        </DataContexto.Provider>


    )
}