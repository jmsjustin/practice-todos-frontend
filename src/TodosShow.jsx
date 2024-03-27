/* eslint-disable react/prop-types */
export function TodosShow(props) {
  return (
    <div>
      <h1>Todo Information</h1>
      <p>Title: {props.todo.title}</p>
      <p>Description: {props.todo.description}</p>
      <p>Deadline: {props.todo.deadline}</p>
      <p>Completed: {props.todo.completed}</p>
    </div>
  );
}
