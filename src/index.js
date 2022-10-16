import { render } from "react-dom";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
const context = React.createContext();
export const CtxConsumer=context.Consumer;
// const CtxProvider=context.Provider;
const animals=['snake','elephant','lion']
render(
  <BrowserRouter>
  <context.Provider value={{animals:animals}}>
    <Routes>
      <Route path="/" element={<App />}></Route>{" "}
      <Route path="/Header" element={<Header />}></Route>{" "}
      <Route path="/Footer" element={<Footer />}></Route>{" "}
    </Routes>
    </context.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
