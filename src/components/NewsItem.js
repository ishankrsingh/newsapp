// rce -> React's class based component
//import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItem extends Component {
   
    // //Below constructor will be called everytime an object of NewsItem component is created (in this case everytime NewsItem tag is used).
    // constructor(){
    //     super(); // Here we are calling constructor of super class. Note this is mandatory call and if missed will throw an error.
    //     console.log("This is constructor from NewsItem compoenent");
    // }



  render() {
      let {title,description,imageurl,newsUrl} = this.props; //Destructuring in JS to obtain as many props as we want. 
    //   We can also set state using this.props (as done in NewsItem.js). Since for any given NewsItem we won't be changing title and description, therefore we are not setting it as state, rather we are passing it as a prop (Refer NewsItem.js). Note: We can never change props.Although, We can change state by passing props.
    return (
    <div className="my-3">
        {/* Card from Bootstrap */}
        <div className="card" style={{width:"18rem"}}> 
        {/* Since style attribute above,was inline by default(refer its code in bootstrap doc) therfore we have converted it into an object*/}
          <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                {/* We have imported newsUrl from news.js above . btn-sm class above makes the btn a little smaller in size */}
            </div>
</div>
    </div>);
  }
}

export default NewsItem;
