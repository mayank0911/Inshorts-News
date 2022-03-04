import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  const myStyle={
    float:'right',
    fontWeight: 'bold',
    fontStyle: 'italic',
  };
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            Read and get updated with the latest news under 50-60 words.
          </span>
          {/* <img
            alt="app store"
            height="80%"
           // src="https://assets.inshorts.com/website_assets/images/appstore.png"
           src="https://miro.medium.com/max/3840/1*G1XeQf8CqMtXlrOnnHeBTw.png"
          />
          <img
            alt="play store"
            height="80%"
             src="https://assets.inshorts.com/website_assets/images/playstore.png"
            
          /> */}
          <p style={myStyle}>24X7 short Updates</p>
        </div>

        {/* First this */}
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {/* Then this */}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
