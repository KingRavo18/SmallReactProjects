import { useState } from "react"; 

export default function ToDoList() {

    const [tasks, setTasks] = useState<Array<string>>([]);
    const [newTask, setNewTask] = useState<string>("");
    const [warning, setWarning] = useState<string>("");

    const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value);

    const addTask = () => {
        if(newTask.trim()){
            setTasks(t => [...t, newTask]);
            setNewTask("");
            setWarning("");
        }else{
            setWarning("Please write down a task");
        }
    }

    return(
        <div className="toDoList-Container">
            <h1>To Do List</h1>
            <div className="task-list-container">
                <ul>
                    {tasks.map((task, index) => 
                        <li key={index}>{task}</li>
                    )}
                </ul>
            </div>
            <p className="warning-message">{warning}</p>
            <label>Task:</label>
            <input type="text" onChange={handleNewTask} value={newTask}/>
            <button onClick={addTask}>Create Task</button>
        </div>
    );
}