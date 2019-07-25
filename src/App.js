import React, {useState} from 'react';
import teamData from "./TeamData";
import Form from "./components/Form";
import Card from "./components/MemberCard";

import './App.css';

function App() {
  
  const [team, setTeam] = useState({ name: "", email: "", role: "" })
  const [memberToEdit, setMemberToEdit] = useState({})

  function grabMember(member) {
    console.log(member)
    setMemberToEdit(member)
  }

  console.log(memberToEdit)

  return (
    <div className="App">

       <header className="App-header">
        <h1> Team Members </h1>
      </header>

      <div>
        {teamData.map((member)=> {
          console.log(member);
          return <Card 
            member={member}
            grabMember={grabMember}
          />

        })}
      </div>

      <div>
      <Form 
        team={team}
        setTeam={setTeam}
      />
      </div>

    </div>
  );
}

export default App;
