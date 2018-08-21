import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate(event) {
        event.preventDefault();
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const nickname = this.refs.nickname.value;
        if (localStorage.getItem('users') == null) {
            let users = [];
            users.push({ name, age, nickname });
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            let users = JSON.parse(localStorage.getItem('users'));
            users.push({ name, age, nickname });
            localStorage.setItem('users', JSON.stringify(users));
        }
        document.getElementById('myForm').reset();
        this.props.updateState();
    }

    render() {
        let ageItems = [];
        for (let i = 1; i <= 50; i++) {
            ageItems.push(i);
        }
        return (
            <form onSubmit={this.onCreate} ref="myForm" id="myForm">
                <input type="text" ref="name" placeholder="name" className="formField" />&nbsp;
                <select ref="age">
                    {ageItems.map((item) => {
                        return (<option value={item}>{item}</option>);
                    })}
                </select>&nbsp;
                <input type="text" ref="nickname" placeholder="nick name" className="formField" /> &nbsp;
                <button type="submit" value="Submit">Save</button> &nbsp;
                <button type="button" onClick={this.props.onCancel}>Cancel</button>
            </form>
        );
    }
}

export default AddForm;