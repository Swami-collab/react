import UserProfile from "./components/UserProfile";

const userDetailsList = [
  {
    uniqueNo:1,
    imageUrl: " https://img.freepik.com/premium-photo/lego-figure-boy-wearing-glasses-jacket-with-hoodie-it_113255-92731.jpg?size=626&ext=jpg&ga=GA1.2.1925066880.1718098482&semt=ais_hybrid",
    name: "Rajesh",
    role: "Software Developer",
  },
  {
    uniqueNo:2,
    imageUrl: "https://img.freepik.com/premium-photo/lego-figure-boy-wearing-glasses-jacket-with-hoodie-it_113255-92731.jpg?size=626&ext=jpg&ga=GA1.2.1925066880.1718098482&semt=ais_hybrid",
    name: "Swamy",
    role: "Software Developer",
  },
  {
    uniqueNo:3,
    imageUrl: "https://img.freepik.com/premium-photo/lego-figure-boy-wearing-glasses-jacket-with-hoodie-it_113255-92731.jpg?size=626&ext=jpg&ga=GA1.2.1925066880.1718098482&semt=ais_hybrid",
    name: "Sriram",
    role: "Software Developer",
  },
  {
    uniqueNo:4,
    imageUrl: "https://img.freepik.com/premium-photo/lego-figure-boy-wearing-glasses-jacket-with-hoodie-it_113255-92731.jpg?size=626&ext=jpg&ga=GA1.2.1925066880.1718098482&semt=ais_hybrid",
    name: "Prasanth",
    role: "Software Developer",
  }
];

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem)=> (
        <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App;
