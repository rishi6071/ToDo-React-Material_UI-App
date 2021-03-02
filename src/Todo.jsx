import React, { useState } from 'react';
import './Todo.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './TodoItem';

import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import List from '@material-ui/core/List';

const Todo = () => {
    const [taskText, setTaskText] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [time, setTime] = useState([]);

    // When User Typing the Task Character by Character
    const taskInput = (event) => {
        setTaskText(event.target.value);
    }

    // It deletes the entire TodoLIst Items
    const clearList = () => {
        setTodoItems([]);
    }

    // It adds a Task in ToDo List
    const addTask = (event) => {
        event.preventDefault();
        setTodoItems((preTasks) => {
            return [...preTasks, taskText.trim()];
        });

        let time = new Date();
        setTime((preTime) => {
            return [...preTime, time.toLocaleTimeString() + ', ' + time.toLocaleDateString()];
        });

        setTaskText('');
    }

    // To Permanently Deleted the Item from the list
    const clearItem = (id) => {

        setTodoItems((preTasks) => {
            return preTasks.filter((task, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            {/* Header */}
            <h1 className="text-capitalize"> todo list
                <span>
                    <Tooltip title="Clear List" arrow>
                        <DeleteSweepIcon fontSize="large" onClick={clearList} />
                    </Tooltip>
                </span>
            </h1>

            {/* Task Input Field */}
            <form autoComplete="off" className="mt-3 ml-4" onSubmit={addTask}>
                <TextField id="standard-basic" className="mt-1" label="Add a Task"
                    onChange={taskInput} value={taskText} required autoFocus
                />
                <Button type="submit" className="bg-btn rounded ml-2 mt-3 text-white">
                    <PlusOneIcon fontSize="medium" />
                </Button>
            </form>

            {/* Task List */}
            <List className="mt-4 ml-4">
                {
                    todoItems.map((currentTask, taskId) => {
                        return <TodoItem key={taskId}
                            task={currentTask}
                            taskTime={time[taskId]}
                            id={taskId}
                            onSelect={clearItem}
                        />
                    })
                }
            </List>
        </>
    );
}

export default Todo;