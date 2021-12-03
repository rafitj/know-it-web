import { PageHeader } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledPageHeader = styled(PageHeader)`
  background-color: transparent;
  .ant-page-header-heading-tags {
    right: 15px;
    position: absolute;
  }
  .ant-page-header-heading-tags .ant-tag {
    border-radius: 5px;
  }
`
export class NoteCardHeader extends React.Component<{
  title?: string
  subTitle?: string
}> {
  render() {
    return (
      <StyledPageHeader
        title={this.props.title}
        subTitle={this.props.subTitle}
      />
    )
  }
}
