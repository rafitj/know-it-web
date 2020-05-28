import { observer } from 'mobx-react'
import React from 'react'
import {
  PersistenceKey,
  PersistenceStore,
} from '../../../stores/PersistenceStore'
import { UserStore } from '../../../stores/UserStore'
import { BigText } from '../../components/Typography/BigText'
import { RouterStore } from '../RouterStore'

@observer
export class OAuthRedirect extends React.Component {
  getUrlParameter(name: string) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
    const regex = new RegExp(`[\\?&]${name}=([^&#]*)`)
    const results = regex.exec(RouterStore.history.location.search)
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }

  componentDidMount() {
    const token = this.getUrlParameter('token')
    const error = this.getUrlParameter('error')

    if (error) {
      RouterStore.push('/login')
    } else {
      this.updateUser(token)
    }
  }

  async updateUser(token: string) {
    PersistenceStore.setItem(PersistenceKey.UserSession, token)
    await UserStore.fetchUser(token)
    RouterStore.push('/note-space')
  }

  render() {
    return <BigText>Loading.</BigText>
  }
}
