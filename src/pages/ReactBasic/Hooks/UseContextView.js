import React, { useContext } from 'react';

const AppContext = React.createContext({})

const Navbar = () => {
    const { userName } = useContext(AppContext)
    return (
        <div className="navbar">
            <p>AwesomeSite</p>
            <p>{userName}</p>
        </div>
    )
}

const Message = () => {
    const { userName } = useContext(AppContext)

    return (
        <div className="message">
            <h1>Messages</h1>
            <p>1 message for {userName}</p>
            <p className="message">useContext is awesome!</p>
        </div>
    )
}

export default function UseContextView () {
    return (
        <AppContext.Provider value={{
            userName: 'superawesome1'
        }}>
            <div>
                <h3>useContext</h3>
                <div className="App">
                    <Navbar />
                    <Message />
                </div>
            </div>
        </AppContext.Provider>
    )
}
