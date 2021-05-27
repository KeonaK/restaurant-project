import React, { Component } from "react";
import API from "../utils/API"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
  let value = e.target.value;
  let name = e.target.name;

  this.setState({ [name]: value });
};
onSubmit = e => {
    e.preventDefault();
const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    if (newUser.email && newUser.password){
      API.login({
        email:newUser.email,
        password: newUser.password
      })
      .then(res => {
        this.props.setToken(res.data.token)

        console.log(res)
      })
     
    }
console.log(newUser);
  };

  render() {
    const { errors } = this.state;
  return (
    <form className="box"  onSubmit = {this.onSubmit} >
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
          <input className="input" type="password" placeholder="********"  onChange={this.onChange}
                  name="password"
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  />
        </div>
      </div>
      <button className="button is-primary" >Submit</button>
    </form>
  );
}
}
export default Login;
