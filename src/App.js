import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {action, comedy} from './urls'
import  './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={comedy} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
