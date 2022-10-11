import React from 'react';
import './App.css';
// import { Header } from './components/header';
import Header from './components/header';
import Footer from "./components/footer.js";

function createAlert() {
    alert('Hello, you clicked me');
}

function ShowMessage(props) {
    if (props.toShow) {
        return <h2 > My message < /h2>
    } else {
        return <h2 > Forbiden < /h2>
    }

}

function App() {
    return ( <
        div className = "App" >
        <
        Header info = "This is my message" / >
        <
        p > main content < /p>  <
        Footer trademark = "Page by Zahoor"
        myalert = { createAlert }
        />   <
        // ShowMessage toShow = { true }
        // / > <
        /
        div >
    );
}

export default App;