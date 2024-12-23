
import { useState } from 'react';

import "./apo.css";
function App()
{
    let[todoInput,updateInput]=useState("test")
    let[todoList,updatetodo]=useState(
        [{
            id:1,
            task:"Abc"
        },
        {
        id:2,
        task:"bcd"
        }

        ]
    )
    let nextId=3
    function add(){
        if(todoInput==="")
        {
        alert("add some task")
        }
        else{
            let newTodo=[
                ...todoList,{
                    id:nextId++,
                    task:todoInput
                }
            ]
            updatetodo(newTodo);
            updateInput("");

        }
    }
    function del(id){
        let u=todoList.filter((todo)=>{
            return  todo.id!==id
        }


        )
        updatetodo(u);
        
        
    }
    
    
    return(
        
            
        <div className="background-image">
      {/* Your other content */}

        <div className="afg mt-5 w-15">
            
            <h1 className='xyz'>Todo using react</h1>
            
            <div className="abc">

            
            <input className="bcd" onChange={(e)=>{
            let t=e.target.value
            updateInput(t);
        }} 
            type="text"  value={todoInput}/>
            <button onClick={()=>{
            add()
            }}className="btn btn-primary">Add</button>

           </div>
        
        <ul className="list">
            {
                todoList.map(
                    (todo)=>{
                        return(
                    <li className="list-item">
                <p>{todo.task}</p>
                <button onClick={()=>{
            del(todo.id)}}>❌</button>
                </li>
                    )
                }
            )
        }
       </ul>
       
        
       
       
       </div>
       </div>
    )
}


export default App;