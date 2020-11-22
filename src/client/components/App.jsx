const {useState, useEffect} = require("react");
const React = require("react");
const {format} = require("date-fns");

export function App() {
    const [articles, setArticles] = useState([]);
    const date = format(new Date(), 'EEEE');

    // could you...
    useEffect(() => {
         fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(newArticles => setArticles((oldArticles) => [...oldArticles, ...newArticles]))
            .catch(err => err);
        // ...and when done, save them to state
    }, []);
    // rerun the ask if the value of this array changes
    return (
        // drawing the page
        <div>
            <h1>To read 📚 on {date}</h1>
            {articles.flat().map(article => {
                return <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url}> read the article here </a>
                </div>
            })}
        </div>
    )
}

/*
render: when the state doesn't match what you see on screen - no longer in a static world!!!
re-load: load page & stuff happens in background
 */
