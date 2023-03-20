import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

export const TransactionColumns: ColumnsType<any> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    // width: '9%',
  },
  {
    title: 'Current Status',
    dataIndex: 'Current Status',
    key: 'Current Status',
    // width: '9%',
    render: (status) => {
      return (
        <Tag key={status} color={status === 'Initiated' ? 'green' : 'yellow'}>
          {status}
        </Tag>
      )
    },
  },
  {
    title: 'Receive Amount',
    dataIndex: 'Receive Amount/受取金額',
    key: 'Receive Amount/受取金額',
    // width: '25%',
  },
  {
    title: 'Receive Country',
    dataIndex: 'Receive Country/受取国',
    key: 'Receive Country/受取国',
    // width: '25%',
    render: (country) => {
      return (
        <Tag
          key={country}
          color={
            country === 'JAPAN'
              ? 'red'
              : country === 'BANGLADESH'
              ? 'green'
              : country === 'INDONESIA'
              ? 'blue'
              : country === 'NEPAL'
              ? 'lime'
              : country === 'SRILANKA'
              ? 'purple'
              : 'yellow'
          }
        >
          {country}
        </Tag>
      )
    },
  },
  {
    title: 'Receive Amount',
    dataIndex: 'Receive Amount/受取金額',
    key: 'Receive Amount/受取金額',
    // width: '25%',
  },
  {
    title: 'Receiver Full Name',
    dataIndex: 'Receiver Full Name',
    key: 'Receiver Full Name',
    // width: '25%',
  },
  {
    title: 'Send Amount',
    dataIndex: 'Send Amount/送金額',
    key: 'Send Amount/送金額',
    // width: '25%',
  },
  {
    title: 'Send Country',
    dataIndex: 'Send Country/送金国',
    key: 'Send Country/送金国',
    // width: '25%',
    render: (country) => {
      return (
        <Tag
          key={country}
          color={
            country === 'JAPAN'
              ? 'red'
              : country === 'BANGLADESH'
              ? 'green'
              : country === 'INDONESIA'
              ? 'blue'
              : country === 'NEPAL'
              ? 'lime'
              : country === 'SRILANKA'
              ? 'purple'
              : 'yellow'
          }
        >
          {country}
        </Tag>
      )
    },
  },
  {
    title: 'Sender Full Name',
    dataIndex: 'Sender Full Name',
    key: 'Sender Full Name',
    // width: '25%',
  },
]
