import './App.css';
import React from 'react';
import Header from './Component/Header/Header'
import Content from './Component/Content/Content'

let onClick = () => {
    console.log('onClick')
}

let App = (props) => {
    return (
        <div className="wrapper">
            <Header onClick={onClick}/>
            <Content />
        </div>
    );
}

export default App;
