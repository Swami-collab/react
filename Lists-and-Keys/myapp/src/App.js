import { Component } from "react";
import UserProfile from "./components/UserProfile";

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Rajesh",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Swamy",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Sriram",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Prasanth",
    role: "Software Developer",
  },
];

class App extends Component {
  state = { searchInput: "",userDetailsList: userDetailsList };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteUser=(uniqueNo)=>{
     const {userDetailsList}=this.state
    const filtereduserDetailsList=userDetailsList.filter((eachItem)=>{
    return eachItem.uniqueNo!==uniqueNo});
this.setState({userDetailsList:filtereduserDetailsList})
  }

  render() { 
    const { searchInput,userDetailsList } = this.state;
    console.log(userDetailsList);
    const searchResults = userDetailsList.filter((eachItem) => {
      return eachItem.name.includes(searchInput);
    });
    return (
      <div className="list-container">
        <h1 className="title">Users List</h1>
        <input
          type="text"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul>
          { userDetailsList.map((eachItem) => (
            <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} deleteUser={this. deleteUser} />
          ))}
        </ul>
        
      </div>
    );
  }
}

export default App;

