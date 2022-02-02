// rce -> React's class based component
import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
      let {title,description} = this.props; //Destructuring in JS
    return (
    <div>
        {/* Card from Bootstrap */}
        <div className="card" style={{width:"18rem"}}> 
        {/* Since style attribute above,was inline by default(refer its code in bootstrap doc) therfore we have converted it into an object*/}
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/220201180534-tonga-jan-27-super-tease.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
</div>
    </div>);
  }
}

export default NewsItem;
