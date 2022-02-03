// rce -> React's class based component

import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    //We have gotten rid of articles (manual data from JSON) as now we are directly fetching data from the given NewsAPI. 
    //Also although we json data is giving us 38 results, we can only see 20 at a time(in a single page), so we will need to make Next and Prev button inorder to switch pages, which we will do in next video.


   //Below constructor will be called everytime an object of News component is created (in this case everytime News tag is used).
   constructor(){
    super(); // Here we are calling constructor of super class. Note this is mandatory call and if missed will throw an error.
    console.log("This is constructor from News compoenent");
    //this.state helps us in setting the current state inside constructor. We can also set state using this.props (as done in NewsItem.js). Since for any given NewsItem we won't be changing title and description, therefore we are not setting it as state, rather we are passing it as a prop (Refer NewsItem.js). Note: We can never change props.Although, We can change state by passing props.
    
    this.state={
        articles: [],
        loading: false,
        page:1

    }
}
     //I am not going to change articles inside the constructor, rather will do it in componentDidMount()
    // componentDidMount() is a lifecycle method will run once render() method has completed its execution.
    //async function has the ability to wait till the time promises gets resolved in its body. 
    async componentDidMount(){
     
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d452a98a7a264e58b4ee32f12efb45bf&page=1&pageSize=20";
    let data= await fetch(url); //data is a promise here. It will fetch the url 
    let parsedData=await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);

    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults}) //we change the value of state variable using setState() method in class based components
    }

    handlePrevClick= async ()=>{
    //   console.log("Prev");//To check if Prev is actually getting called when Prev button is clicked
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d452a98a7a264e58b4ee32f12efb45bf&page=${this.state.page-1}&pageSize=20`;
    let data= await fetch(url); //data is a promise here. It will fetch the url 
    let parsedData=await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);

    
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles

        })
    }

     handleNextClick=async ()=>{
        //console.log("Next");//To check if Next is actually getting called when Next button is clicked

        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d452a98a7a264e58b4ee32f12efb45bf&page=${this.state.page + 1}&pageSize=20`;
    let data= await fetch(url); //data is a promise here. It will fetch the url 
    let parsedData=await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);

    
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles

        })
    }

  render() {
    return (
    <div className="container my-3">
        <h1>Top Headlines</h1>
        {/* this.state.articles will give us access to all the articles and then we are applying map function to all those articles below to print the data in browser console. */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <div className="row">
        
        {/* We are able to iterate through all the articles via map method as it traverses through every single element (represented by element parameter) and in this case returns the card format present in div tag. Note: every element that we are traversing should have a unique key, without which it will throw error. In this case key= url*/}
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url}></NewsItem> 
            </div>
        })}
            {/* Since we can have null value assigned to title and description in JSON file,hence we are using ternary operator to make sure empty string is getting passed in place of null, so that we don't get any error. */}
            {/* slice method above will make sure that no. of characters getting displayed in description should not exceed 80. In bootstrap there is grid of 12 columns. col-md-4 means that in medium devices width of one column will be equal to 4 standard columns(grid). Therefore we will have 3 such columns of width of 4 columns(original bootstrap grid) in every row. */}
            
            
        </div>
         {/* Below we have added bootstrap flex class for buttons. Also, &larr; and &rarr; are used for left and right arrow respectively in HTML. We have added onClick event listener alongwith disabled property so that anytime we are already on page 1 or less, Prev button should get disabled.*/}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Prev</button>
        <button disabled={this.state.page === Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        {/* Since every page has 20 articles as we have given pageSize=20 in the url, we will disable Next button on the last page  */}
        {/* {console.log("render")} Order of execution -> constructor -> Render() -> componentDidMount()*/}
    </div>);
  }
}

export default News;
