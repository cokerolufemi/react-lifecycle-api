import React, { Component } from "react";

class UsersClass extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          this.setState({ users: data });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        {this.state.users.map((item, id) => {
          return (
            <div key={item.id}>s
              <h1>Name: {item.name}</h1>
              <h1>Username: {item.username}</h1>
              <h1>email: {item.email}</h1>
              <hr></hr>
            </div>
          );
        })}
      </>
    );
  }
}

export default UsersClass;
