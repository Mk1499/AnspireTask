import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/MainForm/Main';
import './App.css';

function App() {
    return ( <
        Router >
        <
        Route path = "/"
        component = { Main }
        /> < /
        Router >
    );
}

export default App;