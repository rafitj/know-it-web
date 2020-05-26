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
  async fetchItems() {
    await Promise.all(appLoadRoutine.map((routine) => routine()))
  }

  setItem<T>(key: PersistenceKey, data: any) {
    localStorage.setItem(key.valueOf(), JSON.stringify(data))
  }
}

const persistenceStore = new PersistenceStore()

export { persistenceStore as PersistenceStore }
