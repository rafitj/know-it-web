import {
  BookOutlined,
  BorderOutlined,
  CalculatorOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import React from 'react'
import { Menu, MenuItem } from '../../base/Menu'

export class ViewMenu extends React.Component {
  render() {
    return (
      <Menu mode="inline" theme="dark">
        <MenuItem icon={<BookOutlined />}>Notes</MenuItem>
        <MenuItem icon={<BorderOutlined />}>Cards</MenuItem>
        <MenuItem disabled={true} icon={<CalculatorOutlined />}>
          Quizzes
        </MenuItem>
      </Menu>
    )
  }
}