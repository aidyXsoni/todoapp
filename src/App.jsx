import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import Utils from "./Utils";

const App = () => {
  const [allTask, setAllTask] = useState(Utils.getLocal("all_task") || []);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("a");

  const setTaskData = (list) => {
    setAllTask(list);
    Utils.setLocal("all_task", list);
  };

  const tasks = [
    { label: "Total Task", key: "a" },
    { label: "Total Pending Task", key: "p" },
    { label: "Total Complete Task", key: "c" },
  ];

  return (
    <Container>
      <div className="home_wrap">
        <div className="label_action_wrap">
          <h4 className="w-50">TODOAPP</h4>
          <div className="action_wrap">
            <Button
              size="sm"
              className=" text-capitalize"
              onClick={() => setOpen(!open)}
            >
              create task
            </Button>
          </div>
          <AddToDo
            open={open}
            setOpen={() => setOpen(false)}
            allTask={allTask}
            setAllTask={(list) => setTaskData(list)}
          />
        </div>
        <div className="task_management_wrap">
          {tasks.map((item, idx) => {
            return <ToDoItem item={item} key={idx} allTask={allTask} />;
          })}
        </div>
        <ToDoList
          allTask={allTask}
          setAllTask={(list) => setTaskData(list)}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </Container>
  );
};

export default App;
