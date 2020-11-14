import fetch from "node-fetch";

const keyDevToInfo = (allArticles) => {
    return allArticles.map(({title, description, url}) => ({title, description, url}))
};

export const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => keyDevToInfo(latestArticles))
};
