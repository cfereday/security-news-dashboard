import React, {useState, useEffect} from "react";

const justGetUrls = (allArticles) => {
    let allUrls = [];
    for (const newsArticle of allArticles) {
        allUrls.push(newsArticle.url);
    }
    return allUrls;
};

const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => justGetUrls(latestArticles))
};


export function App() {
    const [articles, setArticles] = useState([]);
    // do I need to change something

    // could you...
    useEffect(async () => {
        // ...grab me the new articles
        const newArticles = await fetchLatestDevToNews();
        // ...and when done, save them to state
        setArticles((oldArticles) => [...oldArticles, ...newArticles]);
    }, []);
    // rerun the ask if the value of this array changes

    return (
        // drawing the page
            <div>
                <p>hey</p>
                {articles.map(article => {
                return <a href={article}> cool </a>})}
            </div>
    )
}

/*
render: when the state doesn't match what you see on screen - no longer in a static world!!!
re-load: load page & stuff happens in background
 */