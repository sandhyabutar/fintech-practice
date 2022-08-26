
import './App.css';
//import Page from "./components/Page.js";
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import Home from "./components/Home.js"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/Login"
            element={
                <Login/>
            }
          />
           <Route
            exact
            path="/Register"
            element={
                <Register/>
            }
          />
           <Route
            exact
            path="/Home"
            element={
                <Home/>
            }
          />
         
           </Routes>

            </BrowserRouter>
       
   
   
    </div>
  );
}

export default App;
