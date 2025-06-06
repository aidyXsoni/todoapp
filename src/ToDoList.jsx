import { Button, ListGroup, Form } from "react-bootstrap";

const ToDoList = (props) => {
  const { allTask, setAllTask, filter, setFilter } = props;

  const getTaskValue = () => {
    if (filter !== "" && filter !== "a")
      return allTask.filter((tsk) => tsk.status === filter) || [];
    else return allTask;
  };

  function getVariant(status) {
    switch (status) {
      case "p":
        return "warning";
      case "c":
        return "success";
      default:
        return "info";
    }
  }

  const setStatus = (type, idx) => {
    let updatedTasks = allTask.map((task, index) =>
      index === idx ? { ...task, status: type } : task
    );
    setAllTask(updatedTasks);
  };

  const delStatus = (create_at) => {
    let delTask = allTask.filter((item) => item.create_at !== create_at);
    setAllTask(delTask);
  };
  const filters = [
    { label: "All Task", key: "a" },
    { label: "Pending Task", key: "p" },
    { label: "Complete Task", key: "c" },
  ];

  return (
    <div className="task_list_wrap">
      <div className="filter_wrap">
        <b>Filter By:</b>{" "}
        <Form>
          {filters.map((type, idx) => (
            <Form.Check
              key={idx}
              inline
              label={type.label}
              name={type.label}
              type="radio"
              onChange={() => setFilter(type.key)}
              checked={type.key === filter}
            />
          ))}
        </Form>
      </div>
      <ListGroup>
        {getTaskValue()?.length > 0 ? (
          getTaskValue()?.map((item, idx) => (
            <ListGroup.Item
              key={idx}
              variant={getVariant(item.status)}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <b className="text-dark">{idx + 1}.</b> {item?.task_label}
              </div>
              <div>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => setStatus("p", idx)}
                >
                  Incomplete
                </Button>
                <Button
                  className="me-2"
                  variant="success"
                  onClick={() => setStatus("c", idx)}
                >
                  Complete
                </Button>
                <Button
                  variant="danger"
                  onClick={() => delStatus(item.create_at)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No Task Founds</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
