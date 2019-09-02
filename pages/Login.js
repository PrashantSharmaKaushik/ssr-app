import React, { Component } from "react";
import Link from 'next/link';
import Router from 'next/router';

class Login extends Component{
    render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-5 col-md-3">
                        <div class="form-login">
                            <a onClick={() => Router.push('/')}>Welcome back.</a>
                            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" />
                            <input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
                        </div>
                        </div>
                </div>
            </div>
  )
    }
}

export default Login;