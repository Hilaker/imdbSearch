import React, { Component } from 'react';
import SearchContainer from './SearchContainer.js';
import logo from './logo.svg';
import './styles/Globals.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <SearchContainer />
            </div>
        );
    }
}

export default App;
