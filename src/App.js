import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';

const App = () => {
  return(
    <>
      <div className="todo">
        <Todo />
      </div>
    </>
  );
}

export default App;