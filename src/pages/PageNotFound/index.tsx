import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageNotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={() => navigate('/')}>
            Go To Dashboard
          </Button>
        }
      />
    </PageWrapper>
  )
}

export default PageNotFound
