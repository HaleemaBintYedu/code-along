import React from "react";
import { TrashIcon } from "@heroicons/react/outline";


function TaskItem({ task, handleDelete }) {
    return (
<div className="flex bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
        <div className="flex-1">{task}</div>
        <button
            className="bg-blue-800 p-2 rounded-md" 
            onClick={() => handleDelete(task)} 
        >
         <TrashIcon height={24} color="white" />
        </button>
 
        </div>
    );
};

export default TaskItem;

// props are info being passed down to the components (from one parent to another) but state are data being managed within the component.
// props are immutable but state is mutable thus can be change as and when needed.