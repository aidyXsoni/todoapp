import classNames from "classnames";

const ToDoItem = (props) => {
  const { item, allTask } = props;
  const getTaskValue = (item) => {
    const tasks = allTask.filter((tsk) => tsk.status === item.key);
    return item.key === "a" ? allTask.length : tasks.length || 0;
  };

  return (
    <div
      className={classNames(
        "task_item_wrap text-capitalize text-center shadow-sm",
        {
          "bg-warning-subtle": item.key === "p",
          "bg-success-subtle": item.key === "c",
          "bg-info-subtle": item.key === "a",
        }
      )}
    >
      {item.label}
      <br />
      {getTaskValue(item)}
    </div>
  );
};

export default ToDoItem;
