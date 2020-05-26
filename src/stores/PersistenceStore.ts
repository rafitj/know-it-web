import { action, observable } from 'mobx'
import { GetUserDetailsResponse } from '../network/proto/protos'
import { UserStore } from './UserStore'

export enum PersistenceKey {
  UserSession = 'UserSession',
}

type AppLoadRoutineType = () => void

const appLoadRoutine: AppLoadRoutineType[] = [
  async () => {
    const storageValue = await localStorage.getItem(PersistenceKey.UserSession)
    if (storageValue === null) {
      return
    }
    const user = JSON.parse(storageValue) as GetUserDetailsResponse
    UserStore.user = user
  },
]

class PersistenceStore {
  @observable
  isLoading: boolean = true

  @action
  async fetchItems() {
    this.isLoading = true
    await Promise.all(appLoadRoutine.map((routine) => routine()))
    this.isLoading = false
  }

  setItem<T>(key: PersistenceKey, data: object) {
    localStorage.setItem(key.valueOf(), JSON.stringify(data))
  }
}

const persistenceStore = new PersistenceStore()

export { persistenceStore as PersistenceStore }
