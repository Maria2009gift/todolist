
import React, { Component } from 'react'
import style from './Form.module.css'

export class Form extends Component {

    state = {
        description: "",

    }


    handleChange = (event) => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.onSubmit(this.state.description)
    }
    render() {
        console.log(this.props.onSubmit);

        return (
            <div className={style.modalWindow}>
                <form onSubmit={this.handleSubmit} className={style.form}>

                    <label>
                        Введіть опис завдання
                        <input className={style.item} value={this.state.description} name='description' onChange={this.handleChange} />
                    </label>

                    <button type='submit'>Додати</button>
                </form>
            </div>
        )
    }


}







