import { action, observable } from 'mobx';
import { GetUserDetailsResponse, LogInUserRequest, SignUpUserRequest } from 'network/proto/protos';
import { Api } from '../network/api/api';
import { PersistenceKey, PersistenceStore } from './PersistenceStore';

class UserStore {
  @observable
  user?: GetUserDetailsResponse

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
  async signUpUser(userCredentials: SignUpUserRequest): Promise<boolean> {
    this.isLoading = true
    try {
      await Api.signUpUser(userCredentials)
    } catch (err) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to sign up user.'
      return false
    }
    this.isLoading = false
    return true
  }

  @action
  async loginUser(userCredentials: LogInUserRequest): Promise<boolean> {
    this.isLoading = true
    try {
      this.user = await Api.signInUser(userCredentials)
      PersistenceStore.setItem(PersistenceKey.UserSession, this.user)
    } catch (err) {
      this.requestError = true
      this.requestErrorDetail = 'Failed to sign in user.'
      return false
    }
    this.isLoading = false
    return true
  }

  @action
  resetErrors(): void {
    this.requestError = false
    this.requestErrorDetail = undefined
  }

  @action
  logout(): void {
    this.user = undefined
  }
}

const userStore = new UserStore()

export { userStore as UserStore }
