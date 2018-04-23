"use strict";

var toggle = true;
var visibilityToggle = function visibilityToggle() {
    details.style = "display:visible";
    document.getElementById('show').innerHTML = "Hide Details";
    toggle = !toggle;
    render();
    console.log(toggle);
    console.log("visible");
};

var invisibleToggle = function invisibleToggle() {
    details.style = "display:none";
    document.getElementById('show').innerHTML = "Show Details";
    toggle = !toggle;
    render();
    console.log("invisible");
};

var render = function render() {

    var app = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggle ? visibilityToggle : invisibleToggle, id: "show" },
            toggle ? 'Show Details' : 'Hide Details'
        ),
        React.createElement(
            "p",
            null,
            toggle
        ),
        React.createElement(
            "p",
            { style: { 'display': 'none' }, id: "details" },
            "Here are some details for you"
        )
    );

    var id = document.getElementById('app');

    ReactDOM.render(app, id);
};

render();
