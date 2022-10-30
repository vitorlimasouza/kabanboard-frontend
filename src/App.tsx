import React from 'react';
import { Routes } from './routes';
import { useEffect } from 'react';
import { GlobalStyle } from './styles'
import { updateToken } from './services/userService';

function App() {

    useEffect(() => {
        updateToken()

        const interval = setInterval(() => {
            updateToken()
        }, 600000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
          <Routes></Routes>
          <GlobalStyle/>
        </>
    );
}

export default App;
