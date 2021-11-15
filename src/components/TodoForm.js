import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState("")

  const handleChange = input => {
    setInput(input);
  };

  const add = () => {
    let id = Math.floor(Math.random() * 10000); 
    addTodo({id: id, text: input});
    setInput("");
  }

  return (
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

export default connect(null, {addTodo})(TodoForm);