import { useState } from "react";
const Edit = ({ id, text, day, reminder, setShowEdit, type, onSet }) => {
  const [textUpdated, setText] = useState(text);
  const [dayUpdated, setDay] = useState(day);
  return (
    <form className="add-task">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Please Enter Task"
          value={textUpdated}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value); // truyen du lieu vao cho text
          }}
        />
      </div>
      <div className="form-control">
        <label>Date & Time </label>
        <input
          type="text"
          placeholder="Please Enter Date"
          value={dayUpdated}
          onChange={(e) => {
            setDay(e.target.value); // truyen du lieu vao cho text
          }}
        />
      </div>
      <button
        type="submit"
        className="btn"
        onClick={(event) => {
          event.preventDefault();

          if (textUpdated || dayUpdated) {
            console.log(textUpdated);
            onSet({
              text: textUpdated,
              reminder: reminder,
              day: dayUpdated,
              id: id,
            });
          }

          setShowEdit(!type); // tat show Edit
        }}
      >
        Save Edit
      </button>
    </form>
  );
};

export default Edit;
