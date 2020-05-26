import { action, observable } from 'mobx'
import { UserStore } from 'stores/UserStore'

export class LoginState {
  @observable
  showError: boolean = false

  @observable
  passwordValue: string = ''

  @observable
  emailValue: string = ''

  @action
  setPassword = (password: string) => {
    this.passwordValue = password
  }

  @action
  setEmail = (email: string) => {
    this.emailValue = email
  }

  @action
  closeError = () => {
    this.showError = false
  }

  @action
  attemptLogin = async () => {
    const userRegisterInfo = {
      username: this.emailValue,
      password: this.passwordValue,
    }
    const loginSuccess = await UserStore.loginUser(userRegisterInfo)
    if (!loginSuccess) {
      this.showError = true
    }
  }
}
