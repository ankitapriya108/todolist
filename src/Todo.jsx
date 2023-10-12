import React, { useState } from "react";
import "./Todo.css";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckIcon from '@mui/icons-material/Check';

function Todo() {
  document.title = "Todo List";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [flag, setFlag] = useState(false)
  const [completed, setCompleted] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    
    if(flag === false)
      setTasks([...tasks, inputValue]);
    else{
      tasks[flag] = inputValue; 
      setTasks(tasks)
      setFlag(false)
    }
    setInputValue("");
  }

  function Delete(event, index) {
    event.preventDefault();
    setTasks(
      tasks.filter((value, ind) => {
        return ind !== index;
      })
    );
  }

  function Edit(event,index){
    event.preventDefault()
    setInputValue(tasks[index])
    setFlag(index)
  }

  function Completed(event,index){
    event.preventDefault()
    setCompleted([...completed, index])
  }
  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="todo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index} className={(completed.includes(index) ? "completed": "")}>
                <span>{task} </span>
                <p>
                  <a href="" onClick={(e) => Delete(e, index)}>
                    <DeleteIcon/>
                  </a>
                  <a href="" onClick={(e) => Edit(e, index)}>
                    <ModeEditIcon/>
                  </a>
                  <a href="" onClick={(e) => Completed(e, index)}>
                    <CheckIcon/>
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;