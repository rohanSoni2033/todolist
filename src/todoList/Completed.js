const Completed = props => {
  const deleteTodoHandler = event => {
    const { id } = event.target.closest('li').dataset;
    props.onDeleteTodo(Number(id));
  };

  return (
    <div>
      <h4>completed todo list</h4>
      <ul>
        {props.completed.map((todo, index) => {
          return (
            <li key={todo.id} data-id={todo.id}>
              <span>{index + 1}</span>
              <span>{todo.title}</span>
              <span>{todo.createdAt.toLocaleDateString()}</span>
              <button type='button' onClick={deleteTodoHandler}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Completed;
