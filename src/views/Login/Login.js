import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Input, message } from 'antd';
import {login} from '../../services/auth'
import {useNavigate } from 'react-router-dom'

const Login = props => {
    const navigate  = useNavigate()


    const onFinish = (values) => {

      //   login(values).then(res => {
      //     localStorage.setItem('token', 'hjlsaf-6789-ajsfkjsafd');
      //     localStorage.setItem('useInfor', JSON.stringify(res.info));
  
      //         navigate('/home')
      //   })
      //   .catch(err=> {
      //       message.error('User not exits');
      //   })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
};

Login.propTypes = {
    
};

export default Login;
