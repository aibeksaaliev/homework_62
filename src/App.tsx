import React, {useCallback, useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./containers/OurStory/OurStory";
import Membership from "./containers/Membership/Membership";
import Write from "./containers/Write/Write";
import Home from "./containers/Home/Home";
import News from "./containers/News/News";
import {NewsType} from "./types";
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
  }, [])

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
                return <News article={newsOne}/>
              })
            )}/>
          </Route>
          <Route path="/our-story" element={(
            <OurStory/>
          )}/>
          <Route path="/membership" element={(
            <Membership/>
          )}/>
          <Route path="/write" element={(
            <Write/>
          )}/>
          <Route path="/login" element={(
            <Login getService={setService}/>
          )}>
            <Route path="continue" element={(
              <LoginVia service={service}/>
            )}></Route>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
