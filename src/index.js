import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        </Route>
        <Route path="/Header" element={<Header />}>
        </Route>
        <Route path="/Footer" element={<Footer />}>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);