import React from 'react';
import { render } from '@testing-library/react';

export default class SignUp extends React.Component {
    state = {
        name: '',
        surname: '',
        secondname: '',
        position: '',
        access: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
                <div class="centered">
                    <form className="authorization">
                    <h2>какой-то текст или еще что-нибудь</h2>

                    <input type="name" className="name" name="name" placeholder='Введите имя' 
                    value={this.state.name} 
                    onChange={e => this.change(e)}
                    />

                    <input type="surname" className="surname" name="surname" placeholder='Введите фамилию' 
                    value={this.state.surname} 
                    onChange={e => this.change(e)}
                    />

                    <input type="secondname" className="secondname" name="secondname" placeholder='Введите отчество' 
                    value={this.state.secondname} 
                    onChange={e => this.change(e)}
                    />
                    
                    <input type="position" className="position" name="position" placeholder='Введите должность' 
                    value={this.state.position} 
                    onChange={e => this.change(e)}
                    />

                    <input type="access" className="access" name="access" placeholder='Введите уровень доступа' 
                    value={this.state.access} 
                    onChange={e => this.change(e)}
                    />
 
                    <button 
                    className="RegisterButton"
                    onClick={(e) => this.onSubmit(e)}>
                    Зарегистрироваться
                    </button>
                    </form>
                </div>     
        )
    }
    
}