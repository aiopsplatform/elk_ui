import React, { Component } from 'react';
import './index.less'
import { Form, Icon, Input, Button, Modal } from 'antd'
import { fetch } from 'whatwg-fetch'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let url = '/index/loginRequest'
                fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data[0].code)
                        if (data[0].code == 0) {
                            this.props.history.push('/conditionquery')
                        } else if (data[0].code == 1) {
                            Modal.info({
                                title: '提示',
                                content: '用户名错误'
                            })
                            return
                        } else if (data[0].code == 2) {
                            Modal.info({
                                title: '提示',
                                content: '密码错误'
                            })
                        }
                    })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_page" >
                <div className="login_box" >
                    <div className="login_form" >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '用户名不能为空' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '密码不能为空' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"  >
                                    登录
                                    </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

Login = Form.create({ name: 'normal_login' })(Login);
export default Login;
