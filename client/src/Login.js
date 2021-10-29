import React from 'react';
import './form.css';

function Login(){
    return (
      <form className="form1">
        <h1 className="head1"> Login</h1>
          <label className="label1">Email-Id</label>
          <input type="email" name="email" className="input1"placeholder="Enter Email"/>
          <label className="label1">Password</label>
          <input type="password" name="password"className="input1" placeholder="Enter Password"/>
          {/* captcha */}
          <input type="submit" name="submit"className="input2"/>
      </form>
    );
}
export default Login;