import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '../redux/actions';

export default function TodoForm({value}) {
  const edit = useSelector((state) => state.edit);
  const [input, setInput] = useState(edit.newValue)
  const dispatch = useDispatch();

  const handleChange = input => {
    setInput(input);
  };

  const add = () => {
    dispatch(addTodo({id: Math.floor(Math.random() * 10000), text: input}));
    setInput("");
  }
  const _edit = () => {
    dispatch(editTodo(edit.id, input));
    setInput("");
  }

  return ( value !== "1" ?
          <div>
          <input
            placeholder='Update your item'
            value={input}
            onChange={e => handleChange(e.target.value)}
            name='text'
            className='todo-input edit'
          />
          <button onClick={_edit} className='todo-button edit'>
            Update
          </button>
          </div>
    :
          <div>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={e => handleChange(e.target.value)}
              name='text'
              className='todo-input'
            />
            <button onClick={add} className='todo-button'>
              Add todo
            </button>
          </div>
      
  );
}