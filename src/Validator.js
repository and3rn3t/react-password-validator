import React, { Component } from "react";
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
    };
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.checkValid();
  }

  checkValid() {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

  render() {
    let validity = this.state.valid ? "Your passwords match" : "Your passwords DO NOT match"
    return (
      <div className="form">
        <h1>Check your Password!</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => this.handleEmail(event)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => this.handlePassword(event)}
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(event) => this.handleConfirmPassword(event)}
        />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
        <h2>{validity}</h2>
      </div>
    );
  }
}

export default Validator;
