import React, { Component, createContext } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { username: "", email: "", _id: "" } };
    this.setUser = (user) => {
      this.setState((prevState) => ({ user: { ...prevState.user, ...user } }));
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
