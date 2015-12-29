require("./stylesheets/style.scss");

const React = require("react");
const ReactDOM = require("react-dom");

const App = () => ({
    render() {
        let styles = {
            color: "white",
            fontWeight: 300,
            lineHeight: 1.6,
            position: "absolute", 
            textAlign: "center",
            top: "20%", 
            width: "100%"
        };

        return (
            <h1 style={styles}>
                <b>Hello!</b> 
                <br />
                And welcome to hot-boilerplate.
            </h1>
        );
    },
});

const appMount = document.getElementById("tada");

global.RD = ReactDOM;

ReactDOM.render(<App />, appMount);