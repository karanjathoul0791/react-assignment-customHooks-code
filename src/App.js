import { useState } from "react";
import Login from "./components/login/login.js";

import Home from "./components/home/home.js";
import './App.css';

function App() {
  
  const [isLoggedin, setIsLoggedin] = useState(false)
  const onLogin = ({user, pass}) => {
    if(user && user !== "" && pass && pass !== "") {
      setIsLoggedin(true)
    }
  }

  return (
    <div className="App">
      {
        !isLoggedin 
        ? <Login onSumit={onLogin} />
        : <Home></Home>
      }
    </div>
  );
}

export default App;
