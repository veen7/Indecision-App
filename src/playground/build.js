let toggle = true;
const visibilityToggle = () => {
    details.style = "display:visible" 
    document.getElementById('show').innerHTML = "Hide Details"    
    toggle = !toggle
    render();
    console.log(toggle)
    console.log("visible")
}

const invisibleToggle = () => {
    details.style = "display:none" 
    document.getElementById('show').innerHTML = "Show Details"    
    toggle = !toggle
    render();
    console.log("invisible")
}



const render = () => {

    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle ? visibilityToggle : invisibleToggle} id="show" >{toggle ? 'Show Details' : 'Hide Details'}</button>
            <p>{toggle}</p>
            <p  style={{'display':'none'}} id="details">Here are some details for you</p>
        </div>
    )
    
        
    
    
    const id = document.getElementById('app')
    
    ReactDOM.render(app,id)
}

render();