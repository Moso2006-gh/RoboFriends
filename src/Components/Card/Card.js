import React from "react";
import "./Card.css"

const nombre = ["Juan Alverto","Manuel Pardo","Alfredo Jimenez"]

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img alt="Foto" src= {this.props.url + "?100x100"} className="imagen"/>
                <div id="Info">
                    <h2 className="Nombre">{this.props.name}</h2>
                    <span className="Email">{this.props.email}</span>
                </div>
            </div>
        );
    }
}

export default Card;