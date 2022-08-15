import React, { useState } from "react";
import TaskItem from "./TaskItem";

// import background from "../assests/background.jpg";
// import { list } from "postcss";

function TaskManager( ) {  // Form function
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {    // Submit function
        e.preventDefault();
        if (input === "") return;          // Setting Array

        setTasks([input, ...tasks])
        setInput("")
    };

    const handleDelete = idx => {           //idx means index
        const newTask = tasks.filter((task) => task !== idx);
        setTasks(newTask)
    }                  



    return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
    <div className="max-w-xl max-h-96 bg-white rounded-xl px-5 py-10">
        <form 
       
        className="space-x-5 flex w-[30rem] mb-10" 
        onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="border-2 border-green-400 p-2 rounded-md outline-none w-10/12" 
        onChange={(e) => setInput(e.target.value)}
        value={input}
           />

        <button type="submit" 
            className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md" 
            disabled={input === ""}
            
            >
                Add
                </button>
        </form>

        {/* // Mapping - get an arbituray word that will hold the item */}

        <div className="space-y-2 overflow-y-auto h-56">
            {tasks.map((task) => (
                <TaskItem task={task} handleDelete={handleDelete} />
                ))}         
            

            
                {/* // <li>{task}</li> */}
            
        </div>   
    </div>
    </div>
    );
}

export default TaskManager;
