import { Component } from "react";
import superStar from './superStar2.png'

export class ToDoList extends Component {
    state = {
        userText: '',
        plansList: []
    }

    onChangeEvent(e) {
        this.setState({userText: e})
    }

    addItem(textFromInput) {
        if (textFromInput === '') {
            alert('Please, enter an item!')
        } else {
            let listArray = this.state.plansList;
            listArray.push(textFromInput);
            this.setState({plansList: listArray, userText: ''})
        }
    }

    crossedWord(e) {
        const liElement = e.target;
        liElement.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.plansList;
        listArray = [];
        this.setState({plansList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="What are your plans for today?"
                        onChange={ (e) => {this.onChangeEvent(e.target.value)} }
                        value={ this.state.userText } />
                    </div>

                    <div className="container">
                        <button onClick={ () => this.addItem(this.state.userText) } className=" btn add">Add</button>
                    </div>

                    <ul className="list">
                        {this.state.plansList.map((item, index) => (
                            <li className="list-item" onClick={this.crossedWord} key={index}>
                                <img src={superStar} alt="diamond" width="30px" /> {item}</li>
                        ))}
                    </ul>

                    <div className="container">
                        <button onClick={() => this.deleteItem()} className="btn delete" >Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}