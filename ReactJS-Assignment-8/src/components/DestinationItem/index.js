 import './index.css'
 const DestinationItem=(props)=>{
    const {destinationsList }=props;
    const {id,name,imgUrl}=destinationsList;
    return(
        <div className='main-container'>
            <img src={imgUrl} alt="avatar" className="image"/>
            <p><b>{name}</b></p>
        </div>
    )

 }

 export default DestinationItem;