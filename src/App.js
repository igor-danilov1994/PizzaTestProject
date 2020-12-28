import './App.css';
import React from 'react';
import Header from './Component/Header/Header'
import Content from './Component/Content/Content'

let App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
