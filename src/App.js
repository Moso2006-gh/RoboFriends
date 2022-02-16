import React from "react";
import CardList from "./Components/Card/CardList"
import SearchBar from "./Components/SearchBar/SearchBar"
import {robots} from "./Components/robots"


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robotList: robots,
            searchField: ""
        }
    }

    onSearchCange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robotList.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="robots tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBar searchCange={this.onSearchCange} ></SearchBar>
                <hr></hr>
                <div id="Robots">
                  <CardList robots={filteredRobots}></CardList>
                </div>
            </div>
        );
    }
}

export default App;