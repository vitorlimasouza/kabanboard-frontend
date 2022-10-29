import React from 'react';
import { BoardPanel } from './pages';
import { Routes } from './routes';
import { useEffect } from 'react';
import { Input, GlobalStyle, Button } from './styles'
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
            <BoardPanel/>
            <GlobalStyle/>
        </>
    );
}

export default App;
