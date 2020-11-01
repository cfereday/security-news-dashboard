import fetch from "node-fetch";
import fs from "fs";

const keyInfo = (allArticles) => {
    return allArticles.map(({title, description, url}) => ({title, description, url}))
};

export const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => keyInfo(latestArticles))
};

const createFile = (articles) => {
    const flattenedArticles = articles.flat();
    const latestArticles = flattenedArticles.map(JSON.stringify).join("\n");

    fs.writeFile('devToArticles.txt', latestArticles, function (err) {
        if (err) return console.log(err);
    })
};

Promise.all([fetchLatestDevToNews()]).then((values) => {
    createFile(values);
});

