import React,{useState} from 'react'
import ListItem from './ListItem';
import Swal from 'sweetalert2';
import { v4 } from "uuid";

const ToDoList = () => {
    const[List,setList]=useState([]);
    const[newTask,setNewTask]=useState("")
    const getTask=(e)=>{
        setNewTask(e.target.value)
    }
    const addTask=(e)=>{
        e.preventDefault();
        if(newTask.length===0){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="">Why do I have this issue?</a>',
            });
        }
        else if(List.includes(newTask)){
           Swal.fire("Duplicated Task");
        }
        else if(List.length===5){
            Swal.fire({
              icon: "success",
              title: "Done for today",
            
              
            });
        }
        else{
            setList([...List,newTask])
            document.getElementById("myForm").reset();
        }
    }
  return (
    <div>
      <div className="container text-center my-3">
        <p className="display-1"> Today's task list</p>
        <p className="h6 mb-3">(TO DO)</p>
        <form id="myForm">
          <input
            placeholder="add your todays tasks here ..."
            onChange={getTask}
            className="form-control"
            type="text"
          />
          <button onClick={addTask} className="btn btn-primary my-3">
            Click
          </button>
        </form>
        {List.map((el) => (
          <ListItem content={el} key={v4()} />
        ))}
      </div>
      {
        List.length===0 ? <p>5 tasks availables</p>:
        List.length===1 ? <p>4 tasks availables</p>:
        List.length===2 ? <p>3 tasks availables</p>:
        List.length===3 ? <p>2 tasks availables</p>:
        List.length===4 ? <p>1 tasks availables</p>:
            <p>No tasks available good work today</p>
      }
    </div> 
  );
}

export default ToDoList