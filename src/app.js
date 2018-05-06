class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state={
            options: []
        }
       
    }
    handleDeleteOptions(){
        console.log("clicked")
        this.setState( () => {
            return {
                options: []
            }
        })
    } 

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){

        if(!option){
            return "Please enter an valid value";            
        }else if(this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }

        this.setState( (prevState) => {
            return{
                options: prevState.options.concat([option])
            }
        })
    }
    render(){ 
        const title = "IndecisionApp";
        const subtitle = "Put your life in the hands of a computer"
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handlePick={this.handlePick}hasOptions={this.state.options.length > 0}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
           <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
           </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }

}

class Options extends React.Component{
    render(){
        return(
            <div>
            <p>Options component here</p>           
            {this.props.options.map( (option,index) => <Option key={index} optionText={option} /> )}
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        </div>

        )
                   
    }
}

class Option extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    // state = {
    //     count: 0
    // }
    
    // handlePrint = () => console.log(this.props.optionText)
   
    render(){

        return(
            <div>
                <p>{this.props.optionText}</p>
                
            </div>
        )
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleOption = this.handleOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error =  this.props.handleAddOption(option);
        this.setState( () => {
            return{
                error
            }
        })
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleOption}>  
                    <input type="text" name="option"/>
                    <button >Submit</button>
               </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));


