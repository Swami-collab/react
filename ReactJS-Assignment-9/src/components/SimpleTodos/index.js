import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
 
]

 class  SimpleTodos extends Component{
  state={initialTodosList1:initialTodosList};

  deleteUser=(id)=>{
    const{initialTodosList1}=this.state;
    const filteredTodosList=initialTodosList1.filter((eachItem)=>{
      return eachItem.id!==id;
    })
    this.setState({initialTodosList1:filteredTodosList})
  }
  render(){
    const {initialTodosList1}=this.state;
    return(
      <body>
      <div className='main-container'>
        <h1 className='title'>SimpleTodos</h1>
        <ul>{
       initialTodosList1.map((eachItem)=>(
          <TodoItem key={eachItem.id} initialTodos={eachItem} deleteUser={this.deleteUser}/>
          ))
          }</ul>
        
      </div>
      </body>
    )
  }
 }
 export default SimpleTodos;