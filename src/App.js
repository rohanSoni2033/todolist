import React, { useEffect, useState } from 'react';

import Create from './todoList/Create';
import InCompleted from './todoList/InCompleted';
import Completed from './todoList/Completed';

const initialTodoList = [];

function App() {
  useEffect(() => {
    const todoListItems = localStorage.getItem('react-todolist');
    console.log(JSON.parse(todoListItems));
  }, []);

  const [completedTodoList, setCompletedTodoList] = useState(
    initialTodoList.filter(todo => todo.complete)
  );

  const [inCompletedTodoList, setInCompletedTodoList] = useState(
    initialTodoList.filter(todo => !todo.complete)
  );

  const createNewTodo = event => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * 1000000);
    const id = randomId;
    const title = event.target.todoName.value;
    const todoItem = {
      id,
      title,
      complete: false,
      createdAt: new Date(),
    };
    setInCompletedTodoList([...inCompletedTodoList, todoItem]);

    localStorage.setItem('react-todolist', JSON.stringify(todoItem));
  };

  const deleteCompletedTodo = id => {
    const filteredArray = completedTodoList.filter(todo => todo.id !== id);

    setCompletedTodoList(filteredArray);
  };

  const deleteInCompletedTodo = id => {
    const filteredArray = inCompletedTodoList.filter(todo => todo.id !== id);

    setInCompletedTodoList(filteredArray);
  };

  return (
    <>
      <Create onCreateNewTodo={createNewTodo} />

      <InCompleted
        inCompleted={inCompletedTodoList}
        completedListUpdate={setCompletedTodoList}
        inCompletedListUpdate={setInCompletedTodoList}
        completed={completedTodoList}
        onDeleteTodo={deleteInCompletedTodo}
      />

      <Completed
        completed={completedTodoList}
        onDeleteTodo={deleteCompletedTodo}
      />
    </>
  );
}

export default App;
