import React, { Component } from 'react'

class Classcounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    }
    decrease = () => {
        this.setState({count: this.state.count - 1});
    }

  render() {
    return (
        <>
      <h1>Class Based Component Counting</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.increase}>+</button>
      <button onClick={this.decrease}>-</button>
        </>
    )
  }
}

export default Classcounting