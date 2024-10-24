import {Component} from 'react'
 import './index.css'
 class Counter extends Component{
  render(){
    return (<div>
      <h1>Counter</h1>
      <p>0</p>
      <button>increment</button>
      <button>decrement</button>
     </div>
  )
}

}

export default Counter