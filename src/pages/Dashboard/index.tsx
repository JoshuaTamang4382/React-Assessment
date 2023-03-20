import { TransactionColumns } from '@/core/utils/ticket.utils'
import { Card, Col, Row, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    getDashboardData()
  }, [])

  const token = localStorage.getItem('token')

  console.log(token)

  const getDashboardData = async () => {
    const response = await axios.post(
      'https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search',
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    setTransactions(response?.data?.data)
    console.log(response, 'repsoinse form dashboard')
    return response
  }

  return (
    <Row>
      <Table dataSource={transactions} columns={TransactionColumns} pagination={false} />
      {/* <Col span={24}>
        {Array.isArray(transactions) && 
          transactions.map((transaction: any) => {
            return (
              <Card key={transaction.id}>
                <p>{transaction['Current Status']}</p>
                <p>{transaction['Receive Amount/受取金額']}</p>
                <p>{transaction['Receive Country/受取国']}</p>
                <p>{transaction['Receiver Full Name']}</p>
              </Card>
            )
          })}
      </Col> */}
    </Row>
  )
}

export default Dashboard
