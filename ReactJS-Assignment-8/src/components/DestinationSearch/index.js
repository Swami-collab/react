import { Component } from "react";
import './index.css';
import DestinationItem from '../DestinationItem';

class DestinationSearch extends Component {
    state = {
        searchInput: "",
        finalList: this.props.destinationsList,
    };

    searchImage = (event) => {
        const searchInput = event.target.value;
        const filteredList = this.props.destinationsList.filter((eachItem) => {
            return eachItem.name.includes(searchInput );
        });
        this.setState({ searchInput, finalList: filteredList });
    };

    render() {
        const { finalList } = this.state;
        return (
            <div>
                <h1 className="header">DestinationSearch</h1>
                <input
                    type="text"
                    className="input"
                    placeholder="Search"
                    onChange={this.searchImage}
                />
                <ul>
                    {finalList.map((eachItem) => (
                        <DestinationItem destinationsList={eachItem} key={eachItem.id} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default DestinationSearch;