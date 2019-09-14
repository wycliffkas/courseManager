import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/courses/CoursesPage';
import AboutPage from './components/about/AboutPage';
import Header from './components/commons/Header';
import PageNotFound from './components/PageNotFound';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <div className="container-fluid">
     <Router>
     <Header/>
      <Switch>
      <Route path="/about" component={AboutPage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/courses" component={CoursesPage}/>
      <Route component={PageNotFound}/>
      </Switch>

     </Router>
   </div>
  );
}

export default App;
