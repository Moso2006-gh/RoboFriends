import React from "react";
import Card from "./Card";
import { robots } from "../robots";

const CardList = () => {
    return(
        <>
        {
            robots.map((user,i) => {
                return <Card key={i} idd={i}/>
            })
        }
        </>
    );
}

export default CardList;