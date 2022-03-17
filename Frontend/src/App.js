import './App.css';
import React from 'react';
import './App.css';
import Login from './pages/login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (

    <Router>

      <div>
        <Switch>

        <Route path="/login" component={Login}>

        </Switch>
      </div>

      <body className="back" >


        <div className="App">
          <Login />

        </div>


      </body>

    </Router>



  );
}


export default App;         
