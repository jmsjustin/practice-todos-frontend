/* eslint-disable react/prop-types */
export function TodosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTodo(props.todo.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTodo(props.todo.id);
  };

  return (
    <div>
      <h1>Todo Information</h1>
      <p>Title: {props.todo.title}</p>
      <p>Description: {props.todo.description}</p>
      <p>Deadline: {props.todo.deadline}</p>
      <p>Completed: {props.todo.completed}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.todo.title} name="title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.todo.description} name="description" type="text" />
        </div>
        <div>
          Deadline: <input defaultValue={props.todo.deadline} name="deadline" type="text" />
        </div>
        <div>
          Completed: <input defaultValue={props.todo.completed} name="completed" type="text" />
        </div>
        <button type="submit">Update Todo</button>
      </form>
      <button onClick={handleClick}>Delete Todo</button>
    </div>
  );
}
