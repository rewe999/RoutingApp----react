import React,{ Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ConntactPage.css'

class ConntactPage extends Component {

    state = {
        value: '',
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            value: ''
        })
    }

    render() { 
        return ( 
            <div className="contact">
                <form>
                    <h3>Napisz do nas!</h3>
                    <textarea value={this.state.value} placeholder="Wpisz wiadomość..." onChange={this.handleChange}></textarea>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
                <Prompt 
                    when={this.state.value}
                    message="Masz niewypełniony formularz "
                />
            </div>
         );
    }
}
 
export default ConntactPage;