const {useState, useEffect} = require("react");
const React = require("react");
const {fetchLatestDevToNews} = require("../responseExtraction/devToArticles");
const {fetchLatestReddits} = require("../responseExtraction/reddit");
const {fetchLatestAdvisories} = require("../responseExtraction/npmAdvisories");
const {format} = require("date-fns");

export function App() {
    const [articles, setArticles] = useState([]);
    const date = format(new Date(), 'EEEE');
    // do I need to change something

   const callApi = () =>  {
        fetch('http://localhost:3000/testAPI')
            .then(res => res.text())
            .then(res => setArticles((oldArticles) => [...oldArticles, ...res]))
            .catch(err => err);
    };
    callApi();

    // // could you...
    // useEffect(async () => {
    //     // ...grab me the new articles
    //     const devTo = await fetchLatestDevToNews();
    //     const reddit = await fetchLatestReddits();
    //     const advisories = await fetchLatestAdvisories();
    //     // ...and when done, save them to state
    //     setArticles((oldArticles) => [...oldArticles, ...devTo, ...reddit, ...advisories]);
    // }, []);
    // rerun the ask if the value of this array changes
    return (
        // drawing the page
        <div>
            <h1>To read 📚 on {date}</h1>
            {articles }
            {/*{articles.map(article => {*/}
            {/*    return <div>*/}
            {/*        <h3>{article.title}</h3>*/}
            {/*        <p>{article.description}</p>*/}
            {/*        <a href={article.url}> read the article here </a>*/}
            {/*    </div>*/}
            {/*})}*/}
        </div>
    )
}

/*
render: when the state doesn't match what you see on screen - no longer in a static world!!!
re-load: load page & stuff happens in background
 */
