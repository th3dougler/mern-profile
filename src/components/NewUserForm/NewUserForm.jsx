import { Component } from "react";
import "./NewUserForm.css";

class NewUserForm extends Component {
  state = {
    newUser: { username: "", email: "" },
  };
  handleChange = (e) => {
    e.persist();
    this.setState((ps) => {
      let t = ps.newUser;
      t[e.target.name] = e.target.value;
      return { newUser: t };
    });
  };

  addUser = async () => {
    console.log("addUser");
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.newUser),
    };
    await fetch("/api", options)
      .then((res) => res.json())
      .then((res) => {
        this.props.getIndex();
        this.setState({ newUser: { username: "", email: "" } });
      });
  };

  render() {
    return (
      <div className='NewUserForm'>
        <p> Create New User</p>
        <div>
          <input
            name='username'
            value={this.state.newUser.username}
            onChange={this.handleChange}
            type='text'
          />
        </div>
        <div>
          <input
            name='email'
            value={this.state.newUser.email}
            onChange={this.handleChange}
            type='email'
          />
        </div>

        <button onClick={this.addUser}>create user</button>
      </div>
    );
  }
}

export default NewUserForm;
