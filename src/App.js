import React, {useState} from 'react';
import teamData from "./TeamData";
import Form from "./components/Form";
import Card from "./components/MemberCard";

import './App.css';

function App() {
const [member, setMember] = useState({ name: "", email: "", role: "" })

  return (
    <div className="App">

       <header className="App-header">
        <h1> Team Members </h1>
      </header>

      <div>
        {teamData.map((member)=> {
          // console.log(member);
          return <Card 
            name={member.name} 
            email={member.email} 
            role={member.role}
          />
        })}
      </div>

      <div>
      <Form />
      </div>
      
    </div>
  );
}

export default App;
