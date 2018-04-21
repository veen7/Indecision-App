"use strict";

console.log("HEddy");

var app = React.createElement(
    "p",
    null,
    "This is the JSX"
);
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Andrew Mead"
    ),
    React.createElement(
        "p",
        null,
        "Age:26"
    ),
    React.createElement(
        "p",
        null,
        "Location:Phildelphia"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
