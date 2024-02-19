import Navbar from "./sections/Navbar";
import Main from "./sections/Main";
import AppContext from '../context'
import React,{useState} from "react";

function App() {
  
  return (
    <AppContext>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </AppContext>
  );
}

export default App;
