import { observable, action } from "mobx";
import { useHistory } from 'react-router-dom'
import { UserStore } from "stores/UserStore";

export class LoginState {
  @observable
  showError: boolean = false;

  @observable
  passwordValue: string = "";

  @observable
  emailValue: string = "";

  @action
  setPassword = (password: string) => {
    this.passwordValue = password;
  }

  @action
  setEmail = (email: string) => {
    this.emailValue = email;
  }

  @action
  closeError = () => {
    this.showError = false;
  }

  @action
  attemptLogin = async () => {
    const userRegisterInfo = {
      username: this.emailValue,
      password: this.passwordValue,
    }
    const loginSuccess = await UserStore.login(userRegisterInfo)
    if (loginSuccess) {
      const history = useHistory()
      history.push('/note-space')
    } else {
      this.showError = true;
    }
  }
}