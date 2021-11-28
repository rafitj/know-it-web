import { action, observable } from 'mobx'
import { UserStore } from 'stores/UserStore'

export class SignUpState {
  @observable
  showError: boolean = false

  @observable
  passwordValue: string = ''

  @observable
  emailValue: string = ''

  @observable
  nameValue: string = ''

  @action
  setName = (name: string) => {
    this.nameValue = name
  }

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
  attemptRegister = async () => {
    const userRegisterInfo = {
      email: this.emailValue,
      firstName: this.nameValue,
      lastName: 'SMD',
      password: this.passwordValue,
    }
    const registerSuccess = await UserStore.signUpUser(userRegisterInfo)
    if (!registerSuccess) {
      this.showError = true
    }
  }
}
