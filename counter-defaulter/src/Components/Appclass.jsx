import { Component } from 'react'

export default class CounterClass extends Component {
  constructor(){
    super()
    this.state = { count: 0 }

  }
  increment = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }
  decrement = () => {
    let newCount = this.state.count  - 1
    if (newCount < 0) newCount = 0
    this.setState({count: newCount})
  } 
  reset = () => this.setState({count: 0})

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <button className='increment' onClick={this.increment}>+</button>
        <button className='decrement' onClick={this.decrement}>-</button>
        <button className='reset' onClick={this.reset}>reset</button>
      </>
    )
  }
}