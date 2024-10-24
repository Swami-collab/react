 import './index.css'
 const TodoItem=(props)=>{
  const {key,initialTodos,deleteUser}=props;
  const {id,title}=initialTodos;
console.log(key);
  const onDelete=()=>{
    deleteUser(id);
  }

  return(
    <div  className='tcontainer'>
    <div className='tsub-container'>
      <h2 className="content">{title}</h2>
      </div>
      <div className='bcontainer'>
         <button type="button" onClick={onDelete}>Delete</button>
         </div>
    </div>
  )

 }

 export default TodoItem;