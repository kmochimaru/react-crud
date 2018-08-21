import React, { Component } from 'react';

class FetchUsers extends Component {

    constructor(props) {
        super(props);
        this.state = { editUser: -1 };
        this.onDelete = this.onDelete.bind(this);
    }

    editFeild(index) {
        let value = this.props.value[index];
        this.setState({
            editUser: index,
            name: value.name,
            age: value.age,
            nickname: value.nickname
        }, () => { });
    }

    onUpdate() {
        let users = this.props.value;
        users[this.state.editUser].name = this.state.name;
        users[this.state.editUser].age = this.state.age;
        users[this.state.editUser].nickname = this.state.nickname;
        localStorage.setItem('users', JSON.stringify(users));
        this.props.updateState();
        this.setState({ editUser: -1 }, () => { });
    }

    onChange(event) {
        this.setState({ [event.name]: event.value }, () => { });
    }

    onDelete(index) {
        let users = JSON.parse(localStorage.getItem('users'));
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        this.props.updateState();
    }

    render() {
        let { value } = this.props;
        let editIndex = this.state.editUser;
        let ageItems = [];
        for (let i = 1; i <= 50; i++) {
            ageItems.push(i);
        }
        if (value == null) return '';
        return (
            value.map((item, index) =>
                <tbody>
                    <tr>
                        <td>
                            {index === editIndex ?
                                <input type="text" name="name" onChange={e => this.onChange(e.target)} defaultValue={item.name} />
                                :
                                item.name
                            }
                        </td>
                        <td>
                            {index === editIndex ?
                                <select name="age" onChange={e => this.onChange(e.target)} defaultValue={item.age}>
                                    {ageItems.map((item) => {
                                        return (<option value={item}>{item}</option>);
                                    })}
                                </select>
                                :
                                item.age
                            }
                        </td>
                        <td>
                            {index === editIndex ?
                                <input type="text" name="nickname" onChange={e => this.onChange(e.target)} value={this.state.nickname} defaultValue={item.nickname} />
                                :
                                item.nickname
                            }
                        </td>
                        <td>
                            {index === editIndex ?
                                <button type="button" onClick={() => this.onUpdate()}>Edit</button>
                                :
                                <button type="button" onClick={() => this.editFeild(index)}>Edit</button>
                            }
                            &nbsp;<button type="button" onClick={() => this.onDelete(index)}>Delete</button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            )
        );
    }
}

export default FetchUsers;