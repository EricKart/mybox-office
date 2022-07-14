import React from 'react';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Nav from './components/Nav';
import Starred from './Pages/Starred';




function App() {
  return (

      <Router>
        <div>
          <Nav/>
        </div>
        <div className="container">
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/starred" element={<Starred/>}/>
        </Routes>
        </div>
        
      </Router>
  );
}

export default App;
