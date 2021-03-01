import Task from "./Task";

const Tasks = ({ listTask, onDelete, onToggle, showEdit, getId }) => {
  return (
    <>
      {listTask.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            showEdit={showEdit}
            getId={getId}
          />
        );
      })}
    </>
  );
};

export default Tasks;
