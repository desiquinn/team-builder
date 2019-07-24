import React, {useState} from "react";

function Form() {

    const[name, setName] = useState('');


    return (


        <div>
            <form>
                <legend>Add New Team Member</legend>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                    />
                </label>
                <label>
                    EMail:
                    <input 
                        type="text"
                        name="email"
                    />
                </label>
                <label>
                    Role:
                    <input 
                        type="text"
                        name="role"
                    />
                </label>
                <button type="submit">
                    Add Team Member
                </button>
                
            </form>
        </div>
    );
}

export default Form;