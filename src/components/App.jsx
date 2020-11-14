import React, {useState, useEffect} from "react";
import {fetchLatestDevToNews} from "../api/devToArticles"
import {fetchLatestReddits} from "../api/reddit"
import {format} from "date-fns";

export function App() {
    const [articles, setArticles] = useState([]);
    const date = format(new Date(), 'EEEE');
    // do I need to change something

    // could you...
    useEffect(async () => {
        // ...grab me the new articles
        const devTo = await fetchLatestDevToNews();
        const reddit = await fetchLatestReddits();
        // ...and when done, save them to state
        setArticles((oldArticles) => [...oldArticles, ...devTo, ...reddit]);
    }, []);
    // rerun the ask if the value of this array changes
    return (
        // drawing the page
        <div>
            <h1>To read 📚 on {date}</h1>
            {articles.map(article => {
                return <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url}> read the article here </a>
                </div>
            })}
        </div>
    )
}

/*
render: when the state doesn't match what you see on screen - no longer in a static world!!!
re-load: load page & stuff happens in background
 */
