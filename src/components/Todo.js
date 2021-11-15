import React, { useEffect, useMemo } from 'react';
import { RiDeleteBack2Line, RiEdit2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo, renderEdit } from '../redux/actions';
import TodoForm from '../components/TodoForm';

export default function Todo() {
  const edit = useSelector((state) => state.edit);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if(edit.id){
    return <TodoForm/>
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => dispatch(completeTodo(todo.id))}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiEdit2Line 
          onClick={()=> dispatch(renderEdit(todo.id, todo.text))}
          className='edit-icon'
        />
        <RiDeleteBack2Line
          onClick={() => dispatch(deleteTodo(todo.id))}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};