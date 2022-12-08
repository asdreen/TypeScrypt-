import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNavbar";
import News from "./components/fetchNews";
import Details from "./components/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JumbotronNews from "./components/Jumbotron";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <JumbotronNews />
        <Routes>
          <Route element={<News />} path="/" />
          <Route element={<Details />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
