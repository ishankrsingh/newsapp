// rce -> React's class based component

import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'; //impt
import InfiniteScroll from "react-infinite-scroll-component";

//Changed News component from class to function, Moved defaultProps and Proptypes to the bottom and removed static and added function name to it,we will change all the states using useState(),changed async function syntax from async updateNews(){} to const updateNews=async()=>{}, replace this.props to props, The job of componentDidMount() will be taken care by useEffect hook,removed render(),Added const to  handleNextClick, handlePrevClick,capitalizeFirstLetter,fetchMoreData as they are no longer part of class. Also take care of all this operator as it is only used in class based components.
const News =(props)=> {
    
    const [articles,setArticles]=useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);
    
    // document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

  
  
  const updateNews=async()=>{

    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url); //data is a promise here. It will fetch the url
    let parsedData = await data.json(); //here we are converting data into parsed format
    props.setProgress(50);
    console.log(parsedData);
    // console.log(data);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    //we change the value of state variable using setState() method in class based components
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
    props.setProgress(100);
  }
  
  
  //I am not going to change articles inside the constructor, rather will do it in componentDidMount()
  // componentDidMount() is a lifecycle method will run once render() method has completed its execution.
  //async function has the ability to wait till the time promises gets resolved in its body.
  
//   useEffect(()=>{
//     effect
//     return ()=>{
//         cleanup
//     }
//  },[input])

  useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews(); 
    //eslint-disable-next-line
  },[])

//   const handlePrevClick = async () => {//For this function page=page-1
//     //   console.log("Prev");//To check if Prev is actually getting called when Prev button is clicked
//     //setPage()
    
//     setPage(page-1);
//     updateNews(); //We have to use 'this' since we are in class
//   };

//   const handleNextClick = async () => {//For this function page=page+1
//     //console.log("Next");//To check if Next is actually getting called when Next button is clicked
//     setPage(page+1);
//     updateNews();
//   };

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        // this.setState({page:this.state.page + 1})
        setPage(page+1);//Whenever we are trying to fetch new news, it is thrwoing us error as setPage is a asynchronous func.it is taking time to fetch news. Therefore we will directly change page to page+1 in the above url and then set page=page+1.
        
    
    let data = await fetch(url); //data is a promise here. It will fetch the url
    let parsedData = await data.json(); //here we are converting data into parsed format

    console.log(parsedData);
    // console.log(data);
    //we change the value of state variable using setState() method in class based components
    
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
    
  };

  
    return (
      <>
        <h1 className="text-center pt-5 my-4"   >NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* Show loader (Spinner component) only when loading state is true */}
        {loading && <Spinner></Spinner>}
        {/* this.state.articles will give us access to all the articles and then we are applying map function to all those articles below to print the data in browser console. */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
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
          {articles.map((element) => {
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

News.defaultProps={
    country: 'in',
    pageSize: 1,
    category:'general'
}

News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
}

export default News;
