// Dependencies
import { useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';

const data = [
  { id: nanoid(), task: 'Suspendisse potenti.', status: false, due_date: '2023-04-26' },
  {
    id: nanoid(),
    task: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    status: false,
    due_date: '2023-05-08',
  },
  {
    id: nanoid(),
    task: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    status: false,
    due_date: '2023-04-30',
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);

  const addTodo = function (taskName) {
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    };
    setAllTodos((p) => [newTodo, ...p]);
  };

  // delete
  const deleteTodo = function (todoId) {
    console.log(todoId);
  

     // Practice # 1
     // let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
     // if (foundedIndex !== -1) {
     //   const newTodoLists = [...allTodos];
     //   newTodoLists.splice(foundedIndex, 1);
     //   setAllTodos(newTodoLists);
     // }

     // Practice # 2
     // const newTodoLists = allTodos.filter((todo) => todo.id !== todoId);
     // setAllTodos(newTodoLists);

     // Practice # 3
     setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));

};
  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists data={allTodos} deleteTodo={deleteTodo} />
        </main>
      </div>
    </div>
  );
  }

export default App;