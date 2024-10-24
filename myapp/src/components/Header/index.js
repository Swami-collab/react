 import './index.css'
 const Header=()=>
 {
    return(
        <div className='header-container'>
             
            <h1 className='Ra'>RA</h1>
            <div className='src-container'>
            <img src=  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLApZfv1pPdCFEYL_xqYizUsx79D0TP09xFeGhv0iWKoJBTp7Ql_v53q2vA&s"
             alt="avatar" className="himage"/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNG8tZkIkLvzbiZmvK12igJBPBDCsQr2VSZvEQW9RVM4RjnfatjK5EnUTaQ&s"
             alt="avatar" className='himage'/>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XZ5FF4O2BVPsX2Kp5VymRG39LFbdtu7D8GIdI5rE0BkSKF_aTRXykDG3AQ&s"
             alt="avatar" className='himage'/>
             </div>
        </div>
    )
 }

 export default Header;