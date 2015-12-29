const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./components/app");
const appMount = document.getElementById("tada");
const renderApp = () => ReactDOM.render(<App />, appMount);

renderApp();