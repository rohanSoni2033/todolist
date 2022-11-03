import { useState } from 'react';

const Create = props => {
  const [todoValue, setTodoValue] = useState('');

  const todoNameHandler = event => {
    setTodoValue(event.target.value);
  };

  return (
    <form onSubmit={props.onCreateNewTodo}>
      <h4>Add new todo</h4>
      <input
        type='text'
        placeholder='todo name'
        name='todoName'
        onChange={todoNameHandler}
        value={todoValue}
      />
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default Create;
