import React, { Component } from "react";
import API from "../utils/API";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    if (
      newUser.name &&
      newUser.email &&
      newUser.password &&
      newUser.password2
    ) {
      API.register({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        password2: newUser.password2,
      }).then((res) => this.props.setToken(res.data.token));
    }

    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <form className="box" onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Jane Doe"
              onChange={this.onChange}
              name="name"
              value={this.state.name}
              error={errors.name}
              id="name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. JaneDoe@example.com"
              onChange={this.onChange}
              name="email"
              value={this.state.email}
              error={errors.email}
              id="email"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="********"
              onChange={this.onChange}
              name="password"
              value={this.state.password}
              error={errors.password}
              id="password"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="********"
              onChange={this.onChange}
              name="password2"
              value={this.state.password2}
              error={errors.password2}
              id="password2"
            />
          </div>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default SignUp;
