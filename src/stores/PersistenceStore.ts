import { action, observable } from 'mobx'
import { NoteState } from './NoteStore'
import { UserStore } from './UserStore'

export enum PersistenceKey {
  UserSession = 'UserSession',
  RecentNotes = 'RecentNotes',
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
  async () => {
    const storageValue = await localStorage.getItem(PersistenceKey.RecentNotes)
    const recentFiles =
      storageValue === null
        ? []
        : (JSON.parse(storageValue) as { id: string; title: string }[])
    await NoteState.setRecentNoteIds(recentFiles)
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

  @action
  storeRecentNotes = async (note: { id: string; title: string }) => {
    const storageValue = await localStorage.getItem(PersistenceKey.RecentNotes)
    const recentFiles =
      storageValue === null
        ? []
        : (JSON.parse(storageValue) as { id: string; title: string }[])
    if (!recentFiles.find((file) => file.id === note.id)) {
      recentFiles.push(note)
      if (recentFiles.length > 3) {
        recentFiles.shift()
      }
      localStorage.setItem(
        PersistenceKey.RecentNotes,
        JSON.stringify(recentFiles)
      )
    }
  }

  @action
  deleteRecentNotesStorage = async (noteId: string) => {
    const storageValue = localStorage.getItem(PersistenceKey.RecentNotes)
    if (storageValue !== null) {
      const recentFiles = JSON.parse(storageValue) as {
        id: string
        title: string
      }[]
      const updatedFiles = recentFiles.filter(({ id }) => id !== noteId)
      localStorage.setItem(
        PersistenceKey.RecentNotes,
        JSON.stringify(updatedFiles)
      )
    }
  }

  @action
  updateRecentNotesStorage = async (note: { id: string; title: string }) => {
    const storageValue = localStorage.getItem(PersistenceKey.RecentNotes)
    if (storageValue !== null) {
      const recentFiles = JSON.parse(storageValue) as {
        id: string
        title: string
      }[]
      const updatedFiles = recentFiles.map((storageNote) =>
        storageNote.id === note.id
          ? { id: note.id, title: note.title }
          : storageNote
      )
      localStorage.setItem(
        PersistenceKey.RecentNotes,
        JSON.stringify(updatedFiles)
      )
    }
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
