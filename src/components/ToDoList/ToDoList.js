
import React, {Component} from 'react'

export class ToDoList extends Component {


    adding = () => {
        
    }

    render(){
        
        return(
            <ul className='list'>
                {this.props.data.map((task) => {
                    return(
                        <li key={task.id}>
                            <p>{task.description}</p>
                            <input type='checkbox'></input>
                        </li>
                    )
                })}
            </ul>
        )
    }
}




