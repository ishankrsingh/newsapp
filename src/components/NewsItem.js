// rce -> React's class based component
//import { getByTitle } from '@testing-library/react';
import React from 'react';
import imageNotFound from './ImageNotFound.jpg'

//changed NewsItem class to function, passed props as an argument as we are making use of it, changed this.props to props as this keyword is not required in function based components(FCE),removed render().
const NewsItem =(props)=> {
   
    // //Below constructor will be called everytime an object of NewsItem component is created (in this case everytime NewsItem tag is used).
    // constructor(){
    //     super(); // Here we are calling constructor of super class. Note this is mandatory call and if missed will throw an error.
    //     console.log("This is constructor from NewsItem compoenent");
    // }



  
      let {title,description,imageurl,newsUrl,author,date,source} = props; //Destructuring in JS to obtain as many props as we want. 
    //   We can also set state using this.props (as done in NewsItem.js). Since for any given NewsItem we won't be changing title and description, therefore we are not setting it as state, rather we are passing it as a prop (Refer NewsItem.js). Note: We can never change props.Although, We can change state by passing props.
    
    imageurl = imageurl==null ? imageNotFound: imageurl;

    return (
    <div className="my-3">
        {/* Card from Bootstrap */}
        <div className="card"> 
        {/* Below we have used badge component from bootstrap to show the source. We had to change left and z-index property manually to adjust the CSS.*/}
        {/* Since in mobile view, bootstrap badge was overflowing, there we got rid of all the styling in span tag of badge and introduced our styling in div tag below.*/}
        <div style={{display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'}}>
        <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>
          <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                {/* We have imported newsUrl from news.js above . btn-sm class above makes the btn a little smaller in size */}
            </div>
</div>
    </div>);
  
}

export default NewsItem;
