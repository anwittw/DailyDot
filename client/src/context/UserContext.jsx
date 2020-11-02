import React, { Component, createContext } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", _id: "", email: "" };
    this.setUser = (username, _id, email) => {
      this.setState({ username, _id, email });
    };
  }

  render() {
    return (
      //! React Fragment: YourContext.Provider, has a counterpart: YourContext.Consumer
      <UserContext.Provider value={{ ...this.state, setUser: this.setUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
