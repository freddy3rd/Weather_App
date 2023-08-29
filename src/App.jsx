import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import WeatherProvider from "./Components/ContextProvider";
// import WeatherProvider from "./Components/ContextProvider";

function App() {
  return (
    <>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </>
  );
}

export default App;
