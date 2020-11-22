const {fetchLatestDevToNews} = require( "../responseExtraction/devToArticles");
const {fetchLatestReddits} = require("../responseExtraction/reddit");
const {fetchLatestAdvisories} = require("../responseExtraction/npmAdvisories");

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  Promise.all([fetchLatestDevToNews(), fetchLatestReddits(), fetchLatestAdvisories()]).then(([devToArticles, redditArticles, advisories]) => {
    const allArticles = [...devToArticles, redditArticles, advisories];
    res.send(allArticles);
  });
});

module.exports = router;
