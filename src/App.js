//We have gotten rid of logo.svg as it is not required for our project.
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
//rcc -> This gives us class based react component below because of ES7 React/ Redux/ GraphQL extension
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  // d ='ishan'; // class variable

  //Note: in class based component we are using render method to return our code, which was not the case in functional based component(in which we were returning the data directly).
  // Render method is a lifecycle method. When react loads any component, series of methods run in the background which renders the HTML onto the screen. JSX gets converted to HTML first and then it renders HTML onto the screen.
  render() {
    return ( //We have used () here for returning data as our code is longer than a single line.
    <div>
      <Router>
      <NavBar>

      </NavBar>
      {/* Through the pageSize prop below, we will be able to limit the no. of news items we want to see in a single page*/}
      

      

       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.   Below is the updated code of React Router Version 6*/}
            {/* Note: Prior to adding unique key to every News component below, even when we were clicking on any of the categories,although path in the url was changing but page was not re-rendering or remounting. If we wanted to look at the new results, reload was required to re-render the page. This was happening because we are using News component in every Route, so react was not re-rendering or remounting. So we had to add key(should be unique) to every News component in order to make it unique and thus telling react to re-render the page once we click on any of the categories. */}
        <Routes>
          <Route path="/"  element={ <News key="general" pageSize={9} country="in" category="general"/>}/>
          <Route path="/business"  element={ <News key="business" pageSize={9} country="in" category="business"/>}/>
          <Route path="/entertainment"  element={ <News key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
          <Route path="/health"  element={ <News key="health" pageSize={9} country="in" category="health"/>}/>
          <Route path="/science"  element={ <News key="science" pageSize={9} country="in" category="science"/>}/>
          <Route path="/sports"  element={ <News key="sports" pageSize={9} country="in" category="sports"/>}/>
          <Route path="/technology"  element={ <News key="technology" pageSize={9} country="in" category="technology"/>}/>
          
        </Routes>
      </Router>
    </div>
    )
  }
}

// React router version below 6 -> Whatever is wriiten between <Route></Route> will work if the url of its path matches.Whatever is wriiten between <Route></Route> will work if the url of its path matches.
//<Route path="/"><News pageSize={9} country="in" category="general"/> </Route>
//           <Route path="/business"><News pageSize={9} country="in" category="business"/> </Route>
//           <Route path="/entertainment"><News pageSize={9} country="in" category="entertainment"/> </Route>
//           <Route path="/health"><News pageSize={9} country="in" category="health"/> </Route>
//           <Route path="/science"><News pageSize={9} country="in" category="science"/> </Route>
//           <Route path="/sports"><News pageSize={9} country="in" category="sports"/> </Route>
//           <Route path="/technology"><News pageSize={9} country="in" category="technology"/> </Route>