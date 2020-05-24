import { ILoginUserRequest } from '../network/proto/ILoginUserRequest'
import { ISignUpUserRequest } from '../network/proto/ISignUpUserRequest'
import { action, observable } from 'mobx'
import axios from 'axios'

interface AuthenticationHeaders {
  Authorization: string
  'Content-Type': string
}

interface User {
  email?: string
  firstName?: string
  lastName?: string
}

class UserStoreImpl {
  @observable
  authenticationHeaders?: AuthenticationHeaders

  @observable
  user?: User

  get isSignedIn(): boolean {
    return this.user !== undefined
  }

  @action
  async register(userCredentials: ISignUpUserRequest): Promise<boolean> {
    try {
      const response = await axios.post(
        'https://know-it-back-master-x3ikbzbziy.herokuapp.com/users/sign-up',
        userCredentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status !== 200) {
        throw new Error(response.data)
      }
      return true
    } catch (err) {
      return false
    }
  }

  @action
  async login(userCredentials: ILoginUserRequest): Promise<boolean> {
    try {
      const response = await axios.post(
        'https://know-it-back-master-x3ikbzbziy.herokuapp.com/login',
        userCredentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status !== 200) {
        throw new Error(response.data)
      }

      this.user = {
        email: userCredentials.username,
      }

      this.authenticationHeaders = {
        Authorization: response.headers.Authorization,
        'Content-Type': 'application/json',
      }
      return true
    } catch (err) {
      return false
    }
  }

  @action
  logout(): void {
    this.authenticationHeaders = undefined
    this.user = undefined
  }
}

export const UserStore = new UserStoreImpl()
