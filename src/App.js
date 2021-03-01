// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddTask from "./component/AddTask";
import Edit from "./component/Edit";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);
  // chinh sua task

  const displayEdit = (id) => {
    setShowEdit(!showEdit);
    console.log(showEdit);
    // return task;
  };

  const getId = (id) => {
    // getTask
    let task = tasks.find((task) => task.id === id);
    setTask(task); // gan cho task
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle Reminder

  const onToggle = (id) => {
    let updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, reminder: !task.reminder };
      }
      return task;
    });
    setTasks(updateTasks);
    // console.log(tasks);
  };

  // sua 1 task
  const onSet = (task) => {
    const index = tasks.findIndex((item) => task.id === item.id);
    console.log(index);
    tasks[index] = task;
    setTasks([...tasks]);
  };
  // them 1 task
  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
    // console.log(tasks);
  };
  const ChangeShowAdd = () => {
    // thay hien thi man hinh
    console.log("chay");
    setShowAddTask(!showAddTask); // nguoc lai
  };
  const display = () => {
    let type_Show = showAddTask ? ( // kiem tra xem  o Trang Thai nao
      <AddTask addTask={addTask} />
    ) : tasks.length > 0 ? (
      <Tasks
        listTask={tasks}
        onDelete={deleteTask}
        onToggle={onToggle}
        showEdit={displayEdit}
        getId={getId} // lay ID cua mot task
      />
    ) : (
      <h2>No Tasks Show</h2>
    );
    return showEdit ? (
      <Edit
        id={task.id}
        text={task.text}
        day={task.day}
        reminder={task.reminder}
        setShowEdit={setShowEdit}
        type={showEdit}
        onSet={onSet}
      />
    ) : (
      type_Show
    );
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={ChangeShowAdd}
        showAdd={showAddTask}
      />
      {display()}
    </div>
  );
};

export default App;
