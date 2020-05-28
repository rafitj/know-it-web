import { action, observable } from 'mobx'
import { UserStore } from 'stores/UserStore'
import { RouterStore } from '../RouterStore'

export class SignUpState {
  @observable
  showError: boolean = false

  @observable
  errorMessage?: string

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
      name: this.nameValue,
      password: this.passwordValue,
    }
    await UserStore.signUpUser(userRegisterInfo)
    this.errorMessage = UserStore.requestErrorDetail
    this.showError = UserStore.requestError
    if (!this.showError) {
      RouterStore.push('/note-space')
    }
    UserStore.resetErrors()
  }
}
