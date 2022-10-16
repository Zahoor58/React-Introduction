import React from "react";
import "./App.css";
// import { Header } from './components/header';
import Header from "./components/header";
import Footer from "./components/footer.js";
import styled, { css } from 'styled-components'
function createAlert() {
  alert("Hello, you clicked me");
}

function ShowMessage(props) {
  if (props.toShow) {
    return <h2> My message </h2>;
  } else {
    return <h2> Forbiden </h2>;
  }
}
const pStyle = {
  fontSize: "2em",
  color:'red',
};
 const Paragraph=styled.p`
 font-size:3em;
 color:green;
 `;
function App() {
  return (
    <div className="App">
      <Header info="This is my message" />
      <p style={pStyle}> main content </p>{" "}
      <Paragraph>
        New style
      </Paragraph>
      <Footer trademark="Page by Zahoor" myalert={createAlert} />{" "}
      {/* ShowMessage toShow = { true }
                   / >  */}{" "}
    </div>
  );
}

export default App;
