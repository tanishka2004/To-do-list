import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import { TodoItem } from './TodoItem'; // Use curly braces for named export

const Todos = ({ todos, onDelete }) => {
  const transitions = useTransition(todos, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <div className="container my-3">
      <h3 className="text-center">Todos List</h3>
      {transitions((style, todo) => (
        <animated.div style={style} key={todo.sno}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </animated.div>
      ))}
      {todos.length === 0 && <p className="text-center">No Todos to display</p>}
    </div>
  );
};

export default Todos;
