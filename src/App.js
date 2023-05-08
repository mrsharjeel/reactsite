import React from 'react';
import {Footer, Blog, Possibility, WhatGpt3, Header, Features} from './containers';
import {Cta, Brand, Navbar} from './components';
import './app.css';

const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App; 