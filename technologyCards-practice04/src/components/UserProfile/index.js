import './index.css'
 

const UserProfile = (props) => {
    const {userDetails,key}=props
    const {imgUrl,title,description,className}=userDetails;
    return(
        <div className={`common ${className}`}>
          
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <img  src={imgUrl} alt="avatar" className="i" />
        </div>
      );
}


export default UserProfile;
