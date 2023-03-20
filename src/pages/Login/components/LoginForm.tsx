import React, { useState } from 'react'
import { useLoginMutation } from '@/api'
import { LocalStorage } from '@/core/constants'
import { IAuthStore } from '@/core/types/auth.types'
import { useAppDispatch } from '@/core/types/store.types'
import { setStorage } from '@/core/utils'
import { Button, Col, Form, Input, Row } from 'antd'
import { login as loginAction } from '@/store/slice/auth.slice'
import { useNavigate } from 'react-router-dom'
import { FormWrapper, LoginContainer, LoginWrapper, TextContainer } from './LoginStyles'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import axios from 'axios'

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const loginHandler = async (values: any) => {
    try {
      const loginresponse = await axios.post(
        'https://jp-dev.cityremit.global/web-api/config/v1/auths/login',
        { ...values, ip_address: '27.111.20.170' },
      )
      console.log(loginresponse, 'login response')
      // await login({ ...values, ip_address: '27.111.20.170' }).unwrap()
      const response: IAuthStore = {
        xs: loginresponse?.data?.data[0].jwt_token,
        // refreshToken: 'dsf3rdaswdfefw3er',
        // email: 'joshua@gmail.com',
      }
      localStorage.setItem('token', loginresponse?.data?.data[0].jwt_token)
      setStorage(LocalStorage.AUTH, JSON.stringify(response))
      // setStorage(LocalStorage.AUTH, loginresponse?.data?.data[0].jwt_token)
      dispatch(loginAction({ ...response }))
      navigate('/')
    } catch (error) {
      console.log(error, 'err')
    }
  }
  return (
    <LoginWrapper>
      <LoginContainer>
        <Row>
          <Col span={10}>
            <TextContainer>
              <p>Welcome to</p>
              <p>React Assessment</p>
              <h3>Get Started</h3>
            </TextContainer>
          </Col>
          <Col span={14}>
            <FormWrapper>
              <div className='title'>
                <h3>Login</h3>
              </div>
              <Form layout='vertical' onFinish={loginHandler}>
                <Form.Item
                  name='login_id'
                  rules={[{ required: true, message: 'Email is required' }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder='Username'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name='login_password'
                  rules={[{ required: true, message: 'Password is required' }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    loading={isLoading}
                    htmlType='submit'
                    disabled={!email || !password}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </FormWrapper>
          </Col>
        </Row>
      </LoginContainer>
    </LoginWrapper>
  )
}

export default LoginForm
