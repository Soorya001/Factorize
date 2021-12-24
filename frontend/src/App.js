import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import About from './pages/About/about';
import Home from './pages/Home/home';
import Learn from './pages/Learn/learn';
import Contact from './pages/Contact/contact';
import Navbar from './Components/Navbar/navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
       <main>
        <Switch>
        <Route path="/" exact>
           <Home/>
         </Route>
         <Route path="/about" exact>
           <About/>
         </Route>
         <Route path="/learn" exact>
           <Learn/>
         </Route>
         <Route path="/contact" exact>
           <Contact/>
         </Route>

         <Redirect to="/"/>
        </Switch> 
         
       </main>
    </Router>
 
  );
}

export default App;
