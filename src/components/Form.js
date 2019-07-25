import React, {useState} from "react";
import teamData from "../TeamData"

function Form(props) {

    const [newMember, setNewMember] = useState({ name: "", email: "", role: "" })

    function handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        const updateMember = {...newMember, [event.target.name]: event.target.value};
        setNewMember(updateMember);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(newMember);
        teamData.push(newMember)
        console.log(teamData)
        console.log(props)
        props.setTeam(teamData)
        setNewMember({ name: "", email: "", role: "" });
    }

    return (


        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <legend>Add New Team Member</legend>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={newMember.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    EMail:
                    <input 
                        type="text"
                        name="email"
                        value={newMember.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Role:
                    <input 
                        type="text"
                        name="role"
                        value={newMember.role}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">
                    Submit
                </button>
                
            </form>
        </div>
    );
}

export default Form;