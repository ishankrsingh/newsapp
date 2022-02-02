// rce -> React's class based component

import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
    <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
            {/* In bootstrap there is grid of 12 columns. col-md-4 means that in medium devices width of one column will be equal to 4 columns. Therefore we will have 3 such columns of width of 4 columns(original bootstrap grid). Also we have given dummy values to title and description below for the time being.*/}
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc"></NewsItem> 
            </div>
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc"></NewsItem>
            </div>
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc"></NewsItem>
            </div>
        </div>
        
    </div>);
  }
}

export default News;
