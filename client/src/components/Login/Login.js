import React, { Component } from 'react';
import './Login.css';
import {login} from '../UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if (res) {
                this.props.history.push('/profile')
            }
        })
    }

  render() {
    return (
        <div className="container style-form">
             <form noValidate onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter Email" 
                    value={this.state.email} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="Enter Password" 
                    value={this.state.password} 
                    onChange={this.onChange}/>
                </div>
                <br/>   
                <button type="submit" 
                className="btn waves-effect waves-light red darken-2 btn-lg btn-block">Login</button>
            </form>


            {/* <p>Need an account? <a href="/signup">Sign Up</a></p>
            <p>Facebook Login? <a href="/login/facebook">Connect with Facebook</a></p>
            <p>Or go <a href="/">home</a>.</p> */}
        </div>
   
 
    )
  }
}

export default Login;