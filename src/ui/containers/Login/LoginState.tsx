import { action, observable } from 'mobx'
import { UserStore } from 'stores/UserStore'
import { RouterStore } from '../RouterStore'

export class LoginState {
  @observable
  showError: boolean = false

  @observable
  passwordValue: string = ''

  @observable
  emailValue: string = ''

  @observable
  errorMessage?: string

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
    await UserStore.loginUser(userRegisterInfo)
    this.showError = UserStore.requestError

    if (this.showError) {
      this.errorMessage = UserStore.requestErrorDetail
      if (!this.errorMessage) {
        this.errorMessage = 'Invalid email or password'
      }
    } else {
      RouterStore.push('/note-space')
    }

    UserStore.resetErrors()
  }
}
