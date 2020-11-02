import fetch from "node-fetch";
import fs from "fs";

const keyDevToInfo = (allArticles) => {
    return allArticles.map(({title, description, url}) => ({title, description, url}))
};

const keySubRedditInfo = (allArticles) => {
    const top5Articles = allArticles.data.children.flat().slice(0, 5);
    return top5Articles.map(({data}) => ({title: data.title, description: data.selftext, url: data.url}))
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

    fs.writeFile('articlesToRead.md', latestArticles, function (err) {
        if (err) return console.log(err);
    })
};

Promise.all([fetchLatestDevToNews(), fetchLatestReddits()]).then((values) => {
    createFile(values[0]);
    createFile(values[1]);
});

