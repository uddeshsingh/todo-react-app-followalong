import GetTasks from "./components/getTasks";
import ListTasks from "./components/ListTasks";

import { useState } from "react";

function App({tasks}){
  const [appTasks, setTasks] = useState(tasks);
  const taskItems = tasks.map((task)=>{
    return <ListTasks name = {task.name} key = {task.id} status = {task.stat}/>;
  })

  function addEvent({name}){

  }
  return(
    <>
      <h1>TODO List</h1>
      <h2>What needs to be done?</h2>
      {/* call getTasks */}
      <GetTasks/>
      {/* call filterTasks */}
      <ul>
      {/* call listTasks */}
      {taskItems};
      </ul>
    </>
  )
}

export default App
