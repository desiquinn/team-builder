import React from "react";


function Card(props) {

    const {name, email, role} = props.member
    
    

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Role: {role}</p>
            </div>
            <button onClick={() => props.grabMember(props.member)}>Edit</button>
        </div>
    )
}

export default Card