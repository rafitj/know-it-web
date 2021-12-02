import { action, observable } from 'mobx'
import {
  LogInUserRequest,
  SignUpUserRequest,
  UserLoginResponse,
} from 'network/proto/protos'
import { Api } from '../network/api/api'
import { RouterStore } from '../ui/containers/RouterStore'
import { PersistenceKey, PersistenceStore } from './PersistenceStore'

class UserStore {
  @observable
  user?: UserLoginResponse

  @observable
  authToken?: string

  @observable
  isLoading: boolean = false

  @observable
  requestError: boolean = false

  @observable
  requestErrorDetail?: string

  get isSignedIn(): boolean {
    return this.user !== undefined && this.user !== null
  }

  @action
  async signUpUser(userCredentials: SignUpUserRequest): Promise<void> {
    this.isLoading = true
    try {
      await Api.signUpUser(userCredentials)
    } catch (err) {
      this.requestError = true
      this.requestErrorDetail = err.message
    }
    this.isLoading = false
  }

  @action
  async loginUser(userCredentials: LogInUserRequest): Promise<void> {
    this.isLoading = true
    try {
      const user = await Api.signInUser(userCredentials)
      this.authToken = user.authToken
      PersistenceStore.setItem(PersistenceKey.UserSession, this.authToken)
      await this.fetchUser()
      RouterStore.push('/note-space')
    } catch (err) {
      this.requestError = true
      this.requestErrorDetail = err.message
    }
    this.isLoading = false
  }

  @action
  resetErrors(): void {
    this.requestError = false
    this.requestErrorDetail = undefined
  }

  @action
  logout(): void {
    this.user = undefined
    this.authToken = undefined
    PersistenceStore.clearItem(PersistenceKey.UserSession)
  }

  async fetchUser(token?: string) {
    if (token) {
      this.authToken = token
    }
    this.user = await Api.fetchUser()
  }
}

const userStore = new UserStore()

export { userStore as UserStore }
