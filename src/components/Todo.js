import React from 'react';
import { RiDeleteBack2Line, RiEdit2Line } from 'react-icons/ri';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../redux/actions';

const Todo = ({todos, completeTodo, deleteTodo}) => {

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiDeleteBack2Line
          onClick={() => deleteTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

const mapStateToProps = state => {
  const todos = state.todos;
  return {todos};
}

export default connect(mapStateToProps, {completeTodo, deleteTodo})(Todo);