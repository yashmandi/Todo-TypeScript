import './App.css';
import { useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

function App() {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    console.log(todoList)
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input
            type="text"
            placeholder='Task'
            name='task'
            value={task}
            onChange={handleChange} />
          <input
            type="number"
            placeholder='Deadline (in days)'
            name='deadline'
            value={deadline}
            onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task, index) => {
          return <TodoTask key={index} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
}

export default App;
