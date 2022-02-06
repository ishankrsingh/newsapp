// rce -> React's class based component

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'; //impt
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    
    static defaultProps={
        country: 'in',
        pageSize: 1,
        category:'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string,
    }

    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

  //Below constructor will be called everytime an object of News component is created (in this case everytime News tag is used).
  constructor(props) {
    super(props); // Here we are calling constructor of super class. Note this is mandatory call and if missed will throw an error.
    console.log("This is constructor from News compoenent");
    //this.state helps us in setting the current state inside constructor. We can also set state using this.props (as done in News Item.js). Since for any given NewsItem we won't be changing title and description, therefore we are not setting it as state, rather we are passing it as a prop (Refer NewsItem.js). Note: We can never change props.Although, We can change state by passing props.

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`; //Since we are using props inside constructor, therefore we have to pass as an argument in both constructor() as well as super(). Here we are also capitalizing the first letter of category in title.
  }
  
  
  async updateNews(){


    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d452a98a7a264e58b4ee32f12efb45bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url); //data is a promise here. It will fetch the url
    let parsedData = await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);
    //we change the value of state variable using setState() method in class based components
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  
  
  //I am not going to change articles inside the constructor, rather will do it in componentDidMount()
  // componentDidMount() is a lifecycle method will run once render() method has completed its execution.
  //async function has the ability to wait till the time promises gets resolved in its body.
  
  async componentDidMount() {//For this function page=1, which is already set in constructor, so we don't have to do it below using setState()
    this.updateNews();
  }

  handlePrevClick = async () => {//For this function page=page-1
    //   console.log("Prev");//To check if Prev is actually getting called when Prev button is clicked
    this.setState({
        page: this.state.page-1
    });
    this.updateNews(); //We have to use 'this' since we are in class
  };

  handleNextClick = async () => {//For this function page=page+1
    //console.log("Next");//To check if Next is actually getting called when Next button is clicked
    this.setState({
        page: this.state.page+1
    });
    this.updateNews();
  };

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

      
        this.setState({page:this.state.page + 1})

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d452a98a7a264e58b4ee32f12efb45bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url); //data is a promise here. It will fetch the url
    let parsedData = await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);
    //we change the value of state variable using setState() method in class based components
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* Show loader (Spinner component) only when loading state is true */}
        {this.state.loading && <Spinner></Spinner>}
        {/* this.state.articles will give us access to all the articles and then we are applying map function to all those articles below to print the data in browser console. */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        
        {/* Below  is the original infinite scroll code and then we made changes to it as you can see above
        <InfiniteScroll
          dataLength={this.state.items.length} //This gives us the data length
          next={this.fetchMoreData} //We have to write fetchMoreData function to fetch more data
          hasMore={true} //hasMore is a condition to check if we still need to load more data
          loader={<h4>Loading...</h4>} // We have replaced this loader with our original one in the code above.
        >
        But this code above is causing two issues -> Horizontal scrolling and new data is not loading
        */}
        {/* In order to solve the horizontal scrolling issue, we have enclosed div class= row inside another div class=container below and also gotten rid of <div> and replaced it with <> as return type of render(). */}
        <div className="container">

        <div className="row">
          {/* We are able to iterate through all the articles via map method as it traverses through every single element (represented by element parameter) and in this case returns the card format present in div tag. Note: every element that we are traversing should have a unique key, without which it will throw error. In this case key= url*/}
          {/* Till now , we were displaying data only when loading was completed, but from now onwards instead of not displaying anything when loading is true, we will concatenate the new data (for infinite scroll feature). So we are getting rid of !this.state.loading below, so that data is always visible.  */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                ></NewsItem>
              </div>
            );
          })}
          {/* Since we can have null value assigned to title and description in JSON file,hence we are using ternary operator to make sure empty string is getting passed in place of null, so that we don't get any error. */}
          {/* slice method above will make sure that no. of characters getting displayed in description should not exceed 80. In bootstrap there is grid of 12 columns. col-md-4 means that in medium devices width of one column will be equal to 4 standard columns(grid). Therefore we will have 3 such columns of width of 4 columns(original bootstrap grid) in every row. */}
        </div>
        </div>
        </InfiniteScroll>
        {/* Below we have added bootstrap flex class for buttons. Also, &larr; and &rarr; are used for left and right arrow respectively in HTML. We have added onClick event listener alongwith disabled property so that anytime we are already on page 1 or less, Prev button should get disabled.*/}
       
     
        
        {/* Since every page has 20 articles as we have given pageSize=20 in the url, we will disable Next button on the last page  */}
        {/* {console.log("render")} Order of execution -> constructor -> Render() -> componentDidMount()*/}
      </>
    );
  }
}

export default News;
