import {Component} from 'react'
 import './index.css'
 class Counter extends Component{
  state={count:0}
  onIncrement=()=>{
    console.log('button was clicked')
    this.setState(prevState=>({count:prevState.count+1,}))

  }

  onDecrement=()=>{
    this.setState(prevState=>({count:prevState-1,}))
  }

  render(){
    const {count}=this.state;
    return (<div className='container' >
      <h1 className='h1'>Counter</h1>
      <p className='p1'>{count}</p>
      <div className='container2'>
      <button  className='button1' onClick={this.onIncrement}>increment</button>
      <button className='button2'  onClick={this.onDecrement}>decrement</button>
     </div>
     </div>
  )
}                           

}

export default Counter