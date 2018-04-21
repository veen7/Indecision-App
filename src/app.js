console.log("HEddy");

var app = <p>This is the JSX</p>
var templateTwo = (
    <div>
        <h1>Andrew Mead</h1>
        <p>Age:26</p>
        <p>Location:Phildelphia</p>
    </div>
)
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot)