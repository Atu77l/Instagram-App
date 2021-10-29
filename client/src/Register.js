import React from 'react';
import './form.css';


function Signup(){
    return (
      <form className="form2">
        <h1 className="head2">Sign In</h1>
        <div className="div1">
          <label className="label2">Email-Id</label>
          <input type="email" name="email" className="input3" placeholder="Email-Id"/>
          </div><div className="div1">
          <label className="label2">Password</label>
          <input type="password" name="password" className="input3" placeholder="Password"/>
          </div><div className="div1">
          <label className="label2">Confirm Password</label>
          <input type="password" name="cpassword"className="input3" placeholder="Confirm Password"/>
          </div><div className="div1">
          <label className="label2">Phone Number</label>
          <input type="number" name="phone" className="input3"placeholder="Phone Number"/>
          </div>
          <input type="submit" name="submit" className="input4"/>
      </form>
    );
}
export default Signup;