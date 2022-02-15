import React from "react";
import "./Card.css"
import {robots} from "../robots"


const Card = ({idd}) =>{
    return(
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt="Foto" src= {"https://robohash.org/" + robots[idd].id + "?100x100"} className="imagen"/>
            <div id="Info">
                <h2 className="Nombre">{robots[idd].name}</h2>
                <span className="Email">{robots[idd].email}</span>
            </div>
        </div>
    );
}

export default Card;