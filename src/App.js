import React ,{useState}from "react";
import "./App.css";
// import { Header } from './components/header';
import Header from "./components/header";
import Footer from "./components/footer.js";
import Numbers from "./components/numbers";
import styled, { css } from "styled-components";

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
  color: "red",
};
const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`;

function App() {
  
  return (
    <div className="App">
      <Numbers></Numbers>
    </div>
  );
}

export default App;
