import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [crewData, setCrewData] = useState([
    {
      rowNumber: 1,
      rowDescription: "Captain",
      rowAssigned: "Luffy",
    },
    {
      rowNumber: 2,
      rowDescription: "Swordsman",
      rowAssigned: "Zoro",
    },
    {
      rowNumber: 3,
      rowDescription: "Cook",
      rowAssigned: "Sanji",
    },
    {
      rowNumber: 4,
      rowDescription: "Sniper",
      rowAssigned: "Usopp",
    },
  ]);

  const addMember = (crew, profession) => {
    let rowNumber = 0;
    if (crewData.length > 0) {
      rowNumber = crewData[crewData.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newMember = {
      rowNumber: rowNumber,
      rowDescription: profession,
      rowAssigned: crew,
    };
    setCrewData((crew) => [...crew, newMember]);
  };

  const deleteMember = (deleteMember) => {
    let filteredData = crewData.filter(function (value) {
      return value.rowNumber !== deleteMember;
    });
    setCrewData(filteredData);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Strawhats</div>
        <div className="card-body">
          <TodoTable todos={crewData} deleteMember={deleteMember} />
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "New member"}
          </button>
          {showForm && <NewTodoForm addMember={addMember} />}
        </div>
      </div>
    </div>
  );
}

export default App;
