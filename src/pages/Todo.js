import React, { useState } from 'react';

function Todo() {
  const storeInput = localStorage.getItem('userInput') || '';
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [storeValue, setStoreValue] = useState(storeInput);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleTaskList = () => {
    if (inputValue.trim() !== '') {
      setTaskList([...taskList, inputValue]);
      setInputValue('');
      alert('Task has been added');
    } 
    if (inputValue.trim() =='') {
      alert('This field is required');
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
    alert('Task has been deleted');
  }

  return (
    <div className="Todo">
      <h1>Add or Delete Task</h1>

      <div className='todoForm'>
        <input
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleTaskList}>Add Task</button>
      </div>
      <div className='todoText'>
        <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task} <button onClick={ () => handleDeleteTask(index)} >X</button></li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;