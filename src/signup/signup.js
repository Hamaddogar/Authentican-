import React from "react";
import { Input, Tooltip, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { signUpHandler } from "../MiddleWare/SignUp/signUp.js";
import { connect } from 'react-redux';
class Signup extends React.Component {
  state = {
    userName: "",
    userEmail: "",
    userPassword: ""
  };

  userName = e => {
    this.setState({ userName: e.target.value });
  };
  userEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  userPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  signUpFunction = e => {
    e.preventDefault();

    signUpHandler(
      this.state.userName,
      this.state.userEmail,
      this.state.userPassword
    );
   
  };

  render() {
   
 
    
    return (
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={this.userName}
        />
        <br />
        <br />
        <Input placeholder="Enter your userEmail" onChange={this.userEmail} />

        <br />
        <br />

        <Input
          placeholder="Enter your userpassword"
          onChange={this.userPassword}
        />

        <Button onClick={this.signUpFunction}> Signup</Button>
        <Link to="/login">login</Link>

        <div> All data</div>
        <h5>Name</h5>{this.props.signreducer.data.userName}
        <br/>
      

      </div>
    );
  }
}
const mapStateToProps = state => ({ signreducer: state })


    export default (connect(mapStateToProps)(Signup));
