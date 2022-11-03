const InCompleted = props => {
  const completedTodoList = props.completed;
  const inCompletedTodoList = props.inCompleted;

  const deleteTodoHandler = event => {
    const { id } = event.target.closest('li').dataset;
    props.onDeleteTodo(Number(id));
  };

  const todoCheckboxHandler = event => {
    const { id } = event.target.closest('li').dataset;
    const todoItem = inCompletedTodoList.find(todo => todo.id === Number(id));

    const filteredArray = inCompletedTodoList.filter(
      todo => todo.id !== Number(id)
    );

    console.log(event.target);
    console.log(filteredArray);
    console.log(id);
    props.inCompletedListUpdate(filteredArray);

    props.completedListUpdate([...completedTodoList, todoItem]);
  };

  return (
    <div>
      <h4>Incomplete todo list</h4>
      <ul>
        {inCompletedTodoList.map((todo, index) => {
          return (
            <li key={todo.title.split(' ').join('')} data-id={todo.id}>
              <input type='checkbox' onChange={todoCheckboxHandler} />
              <span>{index + 1}</span>

              <span>{todo.title}</span>

              <span>{todo.createdAt.toLocaleDateString()}</span>

              <button onClick={props.todoEditHandler} type='button'>
                edit
              </button>
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

export default InCompleted;
