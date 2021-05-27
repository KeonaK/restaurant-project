import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };

  render() {
    const { errors } = this.state;
  return (
    <form className="box" >
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. JaneDoe@example.com"
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="********"  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password" />
        </div>
      </div>
      <button className="button is-primary" noValidate onSubmit={this.onSubmit}>Submit</button>
    </form>
  );
}
}
export default Login;
