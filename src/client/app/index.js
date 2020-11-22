const React = require("react");
const ReactDom = require("react-dom");
const {App} = require("../components/App.jsx");

ReactDom.render(<App/>,
    document.getElementById('app'),
);
