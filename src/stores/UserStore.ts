import { action, observable } from 'mobx'
import { Api } from '../network/api/api';
import SignUpUserRequest = INetwork.SignUpUserRequest;
import LoginInUserRequest = INetwork.LogInUserRequest;
import GetUserDetailsResponse = INetwork.GetUserDetailsResponse;

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
    this.isLoading = true;
    try {
      await Api.signUpUser(userCredentials);
    } catch (err) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to sign up user.';
      return false;
    }
    this.isLoading = false;
    return true;
  }

  @action
  async loginUser(userCredentials: LoginInUserRequest): Promise<boolean> {
    this.isLoading = true;
    try {
      this.user = await Api.signInUser(userCredentials);
    } catch (err) {
      this.requestError = true;
      this.requestErrorDetail = 'Failed to sign in user.';
      return false;
    }
    this.isLoading = false;
    return true;
  }

  @action
  resetErrors(): void {
    this.requestError = false;
    this.requestErrorDetail = undefined;
  }

  @action
  logout(): void {
    this.user = undefined;
  }
}

const userStore = new UserStore();

export {
  userStore as UserStore
}