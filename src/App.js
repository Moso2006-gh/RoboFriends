import React from "react";
import CardList from "./Components/Card/CardList"
import SearchBar from "./Components/SearchBar/SearchBar"
import {robots} from "./Components/robots"

class App extends React.Component{
    render(){
        return(
            <div className="robots tc">
                <h1>RobotFriends</h1>
                <SearchBar></SearchBar>
                <div id="Robots">
                  <CardList robots={robots}></CardList>
                </div>
            </div>
        );
    }
}

export default App;