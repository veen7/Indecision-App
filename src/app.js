console.log("nEddy");

const app2 = {
   title:'Indecision App',
  subtitle:'yes its me',
   options:['One','Two']
}

const templateTwo = (
    <div>
        {app2.subtitle && <h1>{app2.title}</h1> }
        { app2.options.length > 2 ? <p>{'AGE:'+ app2.subtitle}</p> : <p>No options</p>}
        <p>{ app2.options.length > 0 ? "Here are your options" : "No options"}</p>
        <p>Location:Phildelphia</p>
    </div>  
)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot)