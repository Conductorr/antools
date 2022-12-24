import { useState } from "react";
import { Header, Footer } from "./components";
import { MainPage } from "./templates";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
