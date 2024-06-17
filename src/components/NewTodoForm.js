import React, { useState } from "react";

function NewTodoForm(props) {
  const [crew, setCrew] = useState("");
  const [profession, setProfession] = useState("");

  const onSubmit = () => {
    if (profession !== "" && crew !== "") {
      props.addMember(crew, profession);
    }
    setCrew("");
    setProfession("");
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Crew</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCrew(e.target.value)}
            value={crew}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-control">Profession</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={onSubmit}
        >
          Add Crew
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
