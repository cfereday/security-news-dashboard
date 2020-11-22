const fetch = require("node-fetch");

const keySubRedditInfo = (allArticles) => {
    const top5Articles = allArticles.data.children.flat().slice(0, 5);
    return top5Articles.map(({data}) => ({title: data.title, description: data.selftext, url: data.url}))
};

 const fetchLatestReddits = () => {
    return fetch('https://www.reddit.com/r/security.json')
        .then(response => response.json())
        .then(latestArticles => keySubRedditInfo(latestArticles))
};

 module.exports = {
     fetchLatestReddits
 };
