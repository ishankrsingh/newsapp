//We have gotten rid of logo.svg as it is not required for our project.
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
//rcc -> This gives us class based react component below because of ES7 React/ Redux/ GraphQL extension
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {

  // d ='ishan'; // class variable

  //Note: in class based component we are using render method to return our code, which was not the case in functional based component(in which we were returning the data directly).
  // Render method is a lifecycle method. When react loads any component, series of methods run in the background which renders the HTML onto the screen. JSX gets converted to HTML first and then it renders HTML onto the screen.
  const pageSize=9;
  const apiKey=process.env.REACT_APP_NEWS_API; //We have created an environment variable in .env.local file which has a variable REACT_APP_NEWS_API that has our api key. And in order to access that variable we have to use process.env.(variable_name)  as written above. Also in order reflect the changes made in .env.local file we have re-start our server, i.e., terminate the current server and start it again(npm-run-start). 
  
  const [progress,setProgress]=useState(0);
  // state={
  //   progress:0
  // }
  
  // setProgress(progress);



  
    return ( //We have used () here for returning data as our code is longer than a single line.
    <div>
      <Router>
      <NavBar>

      </NavBar>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      {/* Through the pageSize prop below, we will be able to limit the no. of news items we want to see in a single page*/}
      

      

       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.   Below is the updated code of React Router Version 6*/}
            {/* Note: Prior to adding unique key to every News component below, even when we were clicking on any of the categories,although path in the url was changing but page was not re-rendering or remounting. If we wanted to look at the new results, reload was required to re-render the page. This was happening because we are using News component in every Route, so react was not re-rendering or remounting. So we had to add key(should be unique) to every News component in order to make it unique and thus telling react to re-render the page once we click on any of the categories. */}
        <Routes>
          <Route path="/"  element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route path="/business"  element={ <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route path="/entertainment"  element={ <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route path="/health"  element={ <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route path="/science"  element={ <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route path="/sports"  element={ <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route path="/technology"  element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          
        </Routes>
      </Router>
    </div>
    )
  
}

export default App;