//We have gotten rid of logo.svg as it is not required for our project.
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
//rcc -> This gives us class based react component below because of ES7 React/ Redux/ GraphQL extension
import React, { Component } from 'react';

export default class App extends Component {

  // d ='ishan'; // class variable

  //Note: in class based component we are using render method to return our code, which was not the case in functional based component(in which we were returning the data directly).
  // Render method is a lifecycle method. When react loads any component, series of methods run in the background which renders the HTML onto the screen. JSX gets converted to HTML first and then it renders HTML onto the screen.
  render() {
    return ( //We have used () here for returning data as our code is longer than a single line.
    <div>
      <NavBar>

      </NavBar>
      {/* Through the pageSize prop below, we will be able to limit the no. of news items we want to see in a single page*/}
      <News pageSize={9}> 

      </News>
         {/* Hello {this.d}, this is my first class based component.  */}
          {/* As we can see in the above example, we can only access class variables using this operator */}
    </div>
    )
  }
}
