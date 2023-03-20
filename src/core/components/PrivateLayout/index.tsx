import { useAppDispatch } from '@/core/types/store.types'
import { clearStorage, getAuthFromStorage } from '@/core/utils'
import { login, logout } from '@/store/slice/auth.slice'
import { CaretDownOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Layout, MenuProps, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function PrivateLayout() {
  const auth = getAuthFromStorage()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const items: MenuProps['items'] = [
    {
      label: 'My profile',
      key: '0',
      onClick: () => {
        navigate('/my-profile')
      },
    },
    {
      label: 'Log out',
      key: '1',
      onClick: () => {
        clearStorage()
        dispatch(logout())
        window.location.reload()
      },
    },
  ]

  useEffect(() => {
    if (auth) {
      dispatch(login(auth))
    }
  }, [])

  const { Header, Footer, Sider, Content } = Layout

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    display: 'flex',
    justifyContent: 'space-between',
  }

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    margin: '20px',
  }

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  }

  return auth?.xs ? (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={headerStyle}>
        <h1>React Assessment by Joshua Tamang</h1>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()} style={{ color: '#000' }}>
            <Space
              style={{
                padding: '4px',
                background: '#636363',
                borderRadius: '30px',
                height: '40px',
                marginRight: '24px',
              }}
            >
              <Avatar>Krishna</Avatar>
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>CityTech Assessment</Footer>
    </Layout>
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateLayout
