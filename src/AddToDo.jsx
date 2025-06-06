import React, { useState } from "react";
import { Alert, Button, Collapse, Form } from "react-bootstrap";

const AddToDo = (props) => {
  const { open, setOpen, allTask, setAllTask } = props;
  const [taskLabel, setTaskLabel] = useState("");
  const [taskAdded, setTaskAdded] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    let new_task_add = [
      ...allTask,
      { task_label: taskLabel, status: "a", create_at: Date.now() },
    ];
    setAllTask(new_task_add);
    setTaskAdded(true);
    setTimeout(() => {
      setOpen();
    }, 400);
  };

  return (
    <Collapse
      in={open}
      onExit={() => setTaskLabel("")}
      onExited={() => setTaskAdded(false)}
      style={{ flexGrow: 1 }}
    >
      <div className="w-100">
        <Form
          className="input_task_details_wrap"
          onReset={() => setOpen()}
          onSubmit={(e) => submitHandler(e)}
        >
          {!taskAdded ? (
            <>
              <Form.Control
                required
                type="text"
                placeholder="Input Taks Name"
                onChange={(e) => setTaskLabel(e.target.value)}
                value={taskLabel}
              />
              <Button
                type="submit"
                variant="success"
                className="text-capitalize"
              >
                submit
              </Button>
              <Button variant="danger" type="reset" className="text-capitalize">
                cancel
              </Button>
            </>
          ) : (
            <Alert
              variant="success"
              className="mb-0"
              style={{ maxHeight: "37.6px", padding: "0.4rem" }}
            >
              Task added successfully.
            </Alert>
          )}
        </Form>
      </div>
    </Collapse>
  );
};

export default AddToDo;
