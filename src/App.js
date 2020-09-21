import React , {Component} from 'react';



class App extends Component{
state={
    counter:0
}

increment(){
        
        this.setState({
            counter:this.state.counter+1
        })

    }
decrement(){
        this.setState({
            counter:this.state.counter-1
        })
    }


    render(){
      return(

            <div>
          <h1>Class Based Component Example</h1>
          <h2>Counter App</h2>
        <h3>{this.state.counter}</h3>
          <button onClick={this.increment.bind(this)}>Increment</button>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
            </div>
        
      );
    }

}


export default App;