import React, {useCallback, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import {NewsType} from "./types";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./containers/OurStory/OurStory";
import Membership from "./containers/Membership/Membership";
import Home from "./containers/Home/Home";
import News from "./containers/News/News";
import Login from "./containers/Login/Login";
import LoginVia from "./components/LoginVia/LoginVia";

const NEWS_API_URL = "https://saurav.tech/NewsAPI/everything/cnn.json";

function App() {
  const [news, setNews] = useState<NewsType []>([]);
  const [service, setService] = useState("");

  const fetchNews = useCallback(async () => {
    const newsResponse = await axios.get(NEWS_API_URL);
    const fetchedNews: NewsType [] = newsResponse.data.articles;
    setNews(fetchedNews);
  }, []);

  useEffect(() => {
    fetchNews().catch(console.error);
  }, [fetchNews]);

  return (
    <>
      <header className="border-bottom border-2 border-dark">
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}>
            <Route path="continue" element={(
              news.map(newsOne => {
                return <News key={Math.random()} article={newsOne}/>
              })
            )}/>
          </Route>
          <Route path="/our-story" element={(
            <OurStory/>
          )}/>
          <Route path="/membership" element={(
            <Membership/>
          )}/>
          <Route path="/login" element={(
            <Login getService={setService}/>
          )}>
            <Route path="/login/via-google" element={(
              <LoginVia service={service}/>
            )}></Route>
            <Route path="/login/via-linkedin" element={(
              <LoginVia service={service}/>
            )}></Route>
            <Route path="/login/via-github" element={(
              <LoginVia service={service}/>
            )}></Route>
          </Route>
          <Route path="*" element={(
            <div className="text-center">
              <span className="fs-1 fw-bold">Page not found</span>
            </div>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
