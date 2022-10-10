import React from 'react';
import './App.css';
// import { Header } from './components/header';
import Header from './components/header';
import Footer from "./components/footer.js";

function App() {
    return ( <
        div className = "App" >
        <
        Header info = "This is my message" / >
        <
        p > main content < /p>  <
        Footer trademark = "Page by Zahoor" / > < /
        div >
    );
}

export default App;