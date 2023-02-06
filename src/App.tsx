import React from 'react';
import './App.css';
import {AppHeader} from "./components/app-header/AppHeader";
import {MainContainer} from "./components/main-container/MainContainer";

function App() {
    return (
        <div>
            <AppHeader/>
            <MainContainer/>
        </div>
    );
}

export default App;
