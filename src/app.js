
const app = {
   title:'Indecision App',
  subtitle:'yes its me',
   options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
     
}

const removeAll = () => {
    app.options = []
    render();
}

const makeADecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum)
    const option = app.options[randomNum]
    alert(option)
}
const render = () =>{
    const templateTwo = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ? 'Here are the options' : 'No options'}</p>
           <p>{app.options.length}</p>
           <button disabled={app.options.length === 0}  onClick={makeADecision}>What should I do?</button>
           <button onClick={removeAll}>Remove all</button>
           
          <ol>
            {
               app.options.map( (option,index) => {
                    return <li key={index}>{option}</li>
               })
            }    
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
    
          </form>
    
        </div>  
    )
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(templateTwo,appRoot)
    
}

render();