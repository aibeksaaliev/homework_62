import React from 'react';
import {NewsType} from "../../types";
import * as url from "url";

interface NewsProps {
  article: NewsType;
}

const News: React.FC<NewsProps> = ({article}) => {
  return (
    <div className="container flex-row justify-content-between card mb-1">
      <div className="card-body">
        <span className="card-text">{article.author}</span>
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div>
          <span className="card-text">{article.publishedAt.toString()}</span>
        </div>
      </div>
      <div style={{width: "200px", height: "auto", display: "flex", alignItems: "center"}}>
        <img src={article.urlToImage} alt="news" style={{width: "200px", height: "auto"}} className="card-img"/>
      </div>
    </div>
  );
};

export default News;