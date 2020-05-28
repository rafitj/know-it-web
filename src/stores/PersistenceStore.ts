import { action, observable } from 'mobx'
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
    const token = storageValue
    UserStore.authToken = token
    UserStore.fetchUser(token)
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

  setItem<T>(key: PersistenceKey, data: string) {
    localStorage.setItem(key.valueOf(), data)
  }

  clearItem(key: PersistenceKey) {
    localStorage.removeItem(key.valueOf())
  }
}

const persistenceStore = new PersistenceStore()

export { persistenceStore as PersistenceStore }
