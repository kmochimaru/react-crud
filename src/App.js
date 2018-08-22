import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import FetchUsers from './components/FetchUsers';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'React CRUD',
      isHidden: false,
      users: JSON.parse(localStorage.getItem('users'))
    };

    this.setHidden = this.setHidden.bind(this);
    this.trigState = this.trigState.bind(this);
  }

  trigState() {
    this.setStateUsers();
  }

  setStateUsers() {
    this.setState({
      users: JSON.parse(localStorage.getItem('users'))
    });
  }

  setHidden(status) {
    this.setState({
      isHidden: status
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <article>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>nickname</th>
                <th>action</th>
              </tr>
            </thead>
            <FetchUsers updateState={this.trigState} value={this.state.users} />
            {this.state.isHidden && <AddForm updateState={this.trigState} onCancel={() => this.setHidden(false)} />}
            <tfoot>
              <br />
              <button type="button" onClick={() => this.setHidden(true)}>Add</button>
            </tfoot>
          </table>
        </article>
      </div>
    );
  }
}

export default App;


