import { format } from "date-fns";

const createFile = (articles) => {
    const flattenedArticles = articles.flat();
    const latestArticles = flattenedArticles.map(article => `
## ${article.title}

> ${article.description}

* [ ] Read more [here](${article.url})

`).join("\n");

    const content = `# To read 📚 on ${format(new Date(), 'EEEE')}
    
    ${latestArticles}
    `;

    fs.writeFile('articlesToRead.md', content, function (err) {
        if (err) return console.log(err);
    })
};

Promise.all([fetchLatestDevToNews(), fetchLatestReddits()]).then(([devTo, reddit]) => {
    createFile([...devTo, ...reddit]);
});

