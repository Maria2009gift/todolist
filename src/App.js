import {nanoid} from 'nanoid'
import './App.css';
// import todosDate from './todos.json'
import React, { Component } from 'react'
import { ToDoList } from './components/ToDoList/ToDoList';
import { Form } from './components/Form/Form';

export class App extends Component {

  state = {
    tasks: [
      { "id": "id-1", "description": "Вивчити основи React", "isdone": true },
      { "id": "id-2", "description": "Розібратися з React Router", "isdone": false },
      { "id": "id-3", "description": "Пережити Redux", "isdone": false }
    ],
    filter: '',
  }

  // showForm = (event) => {
  //   console.log(event.target);

  //   event.target.classList.add("form_active")
  // }

  deleteToDo = (id) => {
    const newList = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newList })
  }

  addToDo = (description) => {

    const task = { id: nanoid(), description, isdone: false }


    this.setState(({ tasks }) => {

      return {
        tasks: [...tasks, task]
      }

    })
    console.log(this.state.tasks);


    return this.state.tasks
  }

  toggleIsDone = (id) => {
    this.setState((prevState) => {
      return ({
        tasks: prevState.tasks.map((task) => {
          if (task.id === id) {
            return ({ ...task, isdone: !task.isdone })
          }
          return(task)

        })
      })
    }

    )
  }

  calculateTasks = () => {
    return this.state.tasks.reduce((total, task) => {
      if (task.isdone) {
        total.complete += 1
      } else {
        total.notcomplete += 1
      }
      return total
    }, {complete: 0, notcomplete: 0})
  }
  handleFilter = (event)=>{
    this.setState({filter: event.currentTarget.value})
  }
  getVisibleTasks = () =>{
    
    return this.state.tasks.filter((task) => task.description.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  render() {
    const { tasks, filter } = this.state
    const calculate = this.calculateTasks()
    const visibleTasks = this.getVisibleTasks()

    return (
      <>
        <h1>Список ваших справ на тиждень</h1>
        <p>Кількість ваших справ: </p><span>{tasks.length}</span>
        <p>Кількість виконаних справ: {calculate.complete}</p>
        <p>Кількість запланованих справ: {calculate.notcomplete}</p>
        <input placeholder='Знайти елемент' onChange={this.handleFilter}  value={filter}></input>
        <ToDoList data={visibleTasks} deleteing={this.deleteToDo} toggleIsDone={this.toggleIsDone} />
        <button onClick={this.showForm}>Додати завдання</button>
        <Form onSubmit={this.addToDo} />

      </>
    );
  }
}


export default App;




