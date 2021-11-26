import 'antd/dist/antd.css'
import React from 'react'
import { Menu, MenuItem } from '../../base/Menu'

export const ViewMenu = () => {
  return (
    <Menu mode="inline" theme="dark">
      <MenuItem>Notes</MenuItem>
      <MenuItem>Cards</MenuItem>
      <MenuItem>Quizzes</MenuItem>
    </Menu>
  )
}
