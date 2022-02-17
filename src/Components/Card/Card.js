import React from "react";
import "./Card.css"

class Card extends React.Component {
    render() {
        const idd = this.props.idd;
        const robots = this.props.robots;

        return(
            <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card">
                <img alt="Foto" src= {"https://robohash.org/" + robots[idd].id + "?100x100"} className="imagen"/>
                <div id="Info">
                    <h2 className="Nombre">{ 
                    robots[idd].name.length > 11 ? 
                        robots[idd].name.substring(0,11) + "..." :
                        robots[idd].name
                    }</h2>
                    <p className="usuario">{robots[idd].username}</p>
                    <span className="Email">{robots[idd].email}</span>
                </div>
            </div>
        );
    }
}

export default Card;