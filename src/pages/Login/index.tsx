import React from 'react'
import { withPublicRoutes } from '@/hoc'
import LoginForm from './components/LoginForm'

function Login() {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default withPublicRoutes(Login)
