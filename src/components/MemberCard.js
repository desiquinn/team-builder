import React from "react";

function Card(member) {

    const {name, email, role} = member

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Role: {role}</p>
            </div>
            <button>Edit</button>
        </div>
    )
}

export default Card