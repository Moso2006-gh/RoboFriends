import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return(
        <>
        {
            robots.map((user,i) => {
                return <Card key={i} idd={i} robots={robots}/>
            })
        }
        </>
    );
}

export default CardList;