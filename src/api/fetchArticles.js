import fetch from "node-fetch";
import fs from "fs";

const keyDevToInfo = (allArticles) => {
    return allArticles.map(({title, description, url}) => ({title, description, url}))
};

const keySubRedditInfo = (allArticles) => {
    const subRedditArticles = allArticles.data.children.slice(0, 6);
    const latestArticles = subRedditArticles.map(article => `### Article
    Title
    ${article.data.title} \n
    Description
    ${article.data.selftext}\n
    Url
    ${article.data.url}\n`).join("\n");

    fs.writeFile('subRedditArtilces.md', latestArticles, function (err) {
        if (err) return console.log(err);
    })
};

export const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => keyDevToInfo(latestArticles))
};

const fetchLatestReddits = () => {
    return fetch('https://www.reddit.com/r/security.json')
        .then(response => response.json())
        .then(latestArticles => keySubRedditInfo(latestArticles))
};

const createFile = (articles) => {
    const flattenedArticles = articles.flat();
    const latestArticles = flattenedArticles.map(article => `### Article
    Title
    ${article.title} \n
    Description
    ${article.description}\n
    Url
    ${article.url}\n`).join("\n");

    fs.writeFile('devToArticles.md', latestArticles, function (err) {
        if (err) return console.log(err);
    })
};

Promise.all([fetchLatestDevToNews(), fetchLatestReddits()]).then((devToArticles, redditArticles) => {
    createFile(devToArticles);
    console.log('redditArticles', redditArticles)
    keySubRedditInfo(redditArticles);
});

