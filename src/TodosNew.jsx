/* eslint-disable react/prop-types */
export function TodosNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTodo(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Deadline: <input name="deadline" type="text" />
        </div>
        <div>
          Completed: <input name="completed" type="text" />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}
