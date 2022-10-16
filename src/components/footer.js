import React, { Component } from "react";
import { CtxConsumer } from "../index";
class Footer extends Component {
  // inside class
  // createAlert() {
  //     alert('Hello, you clicked me');
  // }
  state = {
    name: "Zahoor Shad",
    age: 35,
    isLogin: true,
  };
  changed = (evt) => {
    this.setState({ name: evt.target.value });
    console.log("changed", evt.target.value);
  };
  render() {
    // const animals = ["cat", "dog", "horse"];
    return (
      <CtxConsumer>
        {
          (context)=>(
            <div>
            {context.animals.map((animal) => {
              return (
                <div key={animal}>
                  <h1> {animal} </h1> <h1> {animal} </h1>{" "}
                </div>
              );
            })}
          </div>
          )
        }
        {/* {animals.map((animal) => {
          return (
            <div key={animal}>
              <h1> {animal} </h1> <h1> {animal} </h1>{" "}
            </div>
          );
        })} */}
      </CtxConsumer>
    );
  }
}
export default Footer;
