import './index.css'

const UserProfile = (props) => {
    const {userDetails,key,deleteUser}=props;
    const {imageUrl,name,role, uniqueNo}=userDetails;
    console.log(key)

    const onDelete=()=>{
      deleteUser(uniqueNo);
    }

    return(
        <div className="user-card-container">
          <img className='avatar' src={imageUrl} alt="avatar" />
          <div className='user-details-container' >
            <h1 className='user-name'>{name}</h1>
            <p className='user-description'>{role}</p>
          </div>
          <button type="button" className='b1' onClick={onDelete}>Delete</button>
        </div>
      );
};

export default UserProfile;
