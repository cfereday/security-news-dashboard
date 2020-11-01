import fetch from "node-fetch";

const justGetUrls = (allArticles) => {
    let allUrls = [];
    for (const newsArticle of allArticles) {
        allUrls.push(newsArticle.url);
    }
    return allUrls;
};

export const fetchLatestDevToNews = () => {
    return fetch('https://dev.to/api/articles?per_page=5&tag=security')
        .then(response => response.json())
        .then(latestArticles => justGetUrls(latestArticles))
};

Promise.all([fetchLatestDevToNews()]).then((values) => {
    console.log('******latest devTo news******');
    console.log(values);
});

