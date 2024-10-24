 import './index.css'
 const ProjectItem=(props)=>{
  const {projectsList}=props
  const {imageURL,description,title}=projectsList;
  return(
    <div>
      <div className='project-container'>
      <img src={imageURL} alt="avatar" className="image"/>
      <p><b>{title}</b></p>
      <p>{description}</p> 
      </div>
      
    </div>
  )
 }

 export default ProjectItem;