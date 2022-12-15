import React, { useState } from "react";

const iniTask = {
  label: "",
  done: false, 
}

const Todolist = () => {
  const [task, setTask] = useState(iniTask)
    
  

  const [tasklist, setTaskList] = useState([]);
  const handleChange = (event) => {
    
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

    const addTask= ({key}) => {
   if(key=="Enter"){
    if(task.label.trim() !== ""){
      setTaskList([
        ...tasklist, 
        task
      ])

    setTask(iniTask)
    }
  } 
  };
  
  const deleteTask= (id) =>{
    let newTask=tasklist.filter((task, index) => id != index)
  setTaskList(newTask)
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center">todos</h1>
        <div className="col-12 col md-7">
          <input
            className="form-control border border-gray"
            placeholder="What be to be done?"
            name="label"
            value={task.label}
            onChange={handleChange}
            onKeyDown={addTask}
  />
        </div>
        <div className="col-12 col md-7">
          {tasklist.map((task, index) => {
            return <div key={index} className="border border-gray" onClick={()=>deleteTask(index)}>{task.label}</div>;
          
          })}
          
          {tasklist.length} item left
        </div>
      </div>
    </div>
    
);
}

export default Todolist;
