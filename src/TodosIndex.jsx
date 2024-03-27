/* eslint-disable react/prop-types */
export function TodosIndex(props) {
  return (
    <div>
      <h1>All Todos</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.deadline}</p>
          <p>{todo.completed}</p>
          <button onClick={() => props.onShowTodo(todo)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
