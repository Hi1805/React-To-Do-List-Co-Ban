import { FaAd, FaEdit, FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle, showEdit, getId }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        <FaEdit
          onClick={() => {
            getId(task.id);
            showEdit();
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
// progress : trang thai loading
// pointer : con tro chuot
