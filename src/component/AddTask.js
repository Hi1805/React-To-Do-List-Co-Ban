import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [Day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  return (
    <form className="add-task">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Please Enter Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value); // truyen du lieu vao cho text
          }}
        />
      </div>
      <div className="form-control">
        <label>Date & Time </label>
        <input
          type="text"
          placeholder="Please Enter Date"
          value={Day}
          onChange={(e) => {
            setDay(e.target.value); // truyen du lieu vao cho text
          }}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Save a Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setReminder(e.target.value == "on" ? true : false);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          addTask({
            text: text,
            reminder: reminder,
            day: Day,
            id: Math.random() * 10000,
          });
        }}
      >
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
