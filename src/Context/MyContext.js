import React, {useContext, useState} from 'react';

const MyContext = React.createContext();

export function useMyContext() {
    return useContext(MyContext);
}

export function MyContextProvider(props) {
    const [id, setId] = useState(1);
    const value = {
        id,
        setId
    }
    return (
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
    );
}
