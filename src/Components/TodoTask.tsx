import React from 'react';
import { ITask } from '../Interfaces';

interface TodoTaskProps {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: TodoTaskProps) => {
    return (
        <div className='task'>
            <div className='content'>
                <span className='task-name'>{task.taskName}</span>
                <span className='deadline'>Deadline: {task.deadline}</span>
            </div>
            <button className='delete-button' onClick={() => {
                completeTask(task.taskName);
            }}>Delete</button>
        </div>
    );
};

export default TodoTask;
