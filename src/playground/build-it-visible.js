

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            handleToggle: true
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState( (prevState) => {
            return {
            handleToggle: !prevState.handleToggle
                
            }
        })
    }
    render(){
        return (
            <div>
                {this.state.handleToggle && <p>This is the data to hide/display</p>}
                <button onClick={this.handleToggleVisibility}>{this.state.handleToggle ? 'Hide Details' : 'Show Details'}</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))

