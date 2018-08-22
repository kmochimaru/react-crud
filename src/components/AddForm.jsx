import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.onCreate = this.onCreate.bind(this);
    }

    onCreate(event) {
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
        this.refs.name.value = null;
        this.refs.age.value = 1;
        this.refs.nickname.value = null;
        this.props.updateState();
    }

    render() {
        let ageItems = [];
        for (let i = 1; i <= 50; i++) {
            ageItems.push(i);
        }
        return (
            <tr>
                <td><input type="text" ref="name" placeholder="name" id="name" /></td>
                <td>
                    <select ref="age" id="age">
                        {ageItems.map((item) => {
                            return (<option value={item}>{item}</option>);
                        })}
                    </select>
                </td>
                <td><input type="text" ref="nickname" placeholder="nick name" id="nickname" /></td>
                <td>
                    <button type="button" onClick={this.onCreate}>Save</button>
                    <button type="button" onClick={this.props.onCancel}>Cancel</button>
                </td>
            </tr>
        );
    }
}

export default AddForm;