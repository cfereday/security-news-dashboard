const fetch = require("node-fetch");

const keyDevToInfo = (allArticles) => {
    return allArticles.map(({title, description, url}) => ({title, description, url}))
};

const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => keyDevToInfo(latestArticles))
};

module.exports = {
    fetchLatestDevToNews
};
