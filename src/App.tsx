import { useState } from "react";
import { Header } from "./components";
import { MainPage } from "./templates";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </>
  );
}

export default App;
