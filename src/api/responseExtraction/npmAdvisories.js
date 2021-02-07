const fetch = require("node-fetch");
const { Headers } = require("node-fetch");

const meta = {
    'X-Spiferack': '1',
    'Content-Type': 'application/json'
};
const headers = new Headers(meta);

const extractOutAdvisories = ({ advisoriesData: { objects } }) => {
    return objects.slice(0, 5).map(advisory => {
        const resplitReferences = advisory.references.split('\n').map(reference => { return reference.substr(1) });
        return {
            title: advisory.title,
            description: 'The Overview: ' + advisory.overview + ' Recommendations: ' + advisory.recommendation,
            url: resplitReferences[0]
        }
    });
};

const fetchLatestAdvisories = async () => {
    return await fetch('https://www.npmjs.com/advisories/', { headers })
        .then(response => response.json())
        .then(latestAdvisories => extractOutAdvisories(latestAdvisories))
};

module.exports = {
    fetchLatestAdvisories
};
