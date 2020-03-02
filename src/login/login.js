import React from "react";
import { Input, Tooltip, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import { loginUpHandler } from "../MiddleWare/Login/login";
class Login extends React.Component {
  state = {
    userEmail: "",
    userPassword: ""
  };

  userEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  userPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  LoginFunction = e => {
    e.preventDefault();

    loginUpHandler(this.state.userEmail, this.state.userPassword);
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={this.userEmail}
        />
        <br />
        <br />

        <br />
        <br />

        <Input
          placeholder="Enter your userpassword"
          onChange={this.userPassword}
        />

        <Button onClick={this.LoginFunction}> login </Button>
      </div>
    );
  }
}

export default Login;
