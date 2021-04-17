import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NewUserForm from "../../components/NewUserForm/NewUserForm";
import UserList from "../../components/UserList/UserList";
class App extends Component {
  state = {
    userList: [],
  };
  componentDidMount() {
    this.getIndex();
  }

  getIndex = async () => {
    console.log("getIndex");
    await fetch("/api")
      .then((res) => res.json())
      .then((res) => this.setState({ userList: res }));
  };
  render() {
    return (
      <main className='App'>
        <Switch>
          <Route
            path='/'
            render={(props) => (
              <div>
                Hello, World!
                <NewUserForm getIndex={this.getIndex} {...props} />
                <UserList data={this.state.userList} {...props} />
              </div>
            )}
          />
        </Switch>
      </main>
    );
  }
}
export default App;
