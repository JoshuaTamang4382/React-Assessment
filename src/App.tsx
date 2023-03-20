import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import React, { Suspense } from 'react'
import { ConfigProvider } from 'antd'
import { customTheme } from './config'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={customTheme}>
        <Suspense>
          <RouterProvider router={routes} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  )
}

export default App
