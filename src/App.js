
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CreateExercise from './Components/CreateExercise'
import CreateUser from './Components/CreateUser'
import EditExercise from './Components/EditExercise'
import ExercisesList from './Components/ExercisesList'
import Navbar from './Components/Navbar'





function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
    </Router>
  );
}

export default App;
