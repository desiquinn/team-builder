import React from "react";

function Card(props) {


    return (
        <div>
            <h2>{props.name}</h2>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
        </div>
    )
}

export default Card