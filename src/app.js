class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: ['one','two','three']
        }
    }
    render(){
        const title = "IndecisionApp";
        const subtitle = "Put your life in the hands of a computer"
        // const options =['one','two','three']
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={this.state.options}/>
                <AddOption />
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
                <button>What should I do?</button>
            </div>
        )
    }

}

class Options extends React.Component{
    handleRemoveAll(){
        console.log("handleRemoveAll clicked")
    }
    render(){
        return(
            <div>
            <p>Options component here</p>           
            {this.props.options.map( (option,index) => <Option key={index} optionText={option} /> )}
            <button onClick={this.handleRemoveAll}>Add Remove all</button>
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
    handleOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if(option){
            comsole.log(option)
        }
    }
    render(){
        return(
            <div>
               <form onSubmit={ this.handleOption}>  
                    <input type="text" name="option"/>
                    <button >Submit</button>
               </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));


