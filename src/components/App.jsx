import React from "react";

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
    const storyUrls = fetchLatestDevToNews().then((urls) => urls.toString().split(','));
    console.log('storyUrls,', storyUrls);
    return <div>
        <p>hey</p>
    </div>
}
