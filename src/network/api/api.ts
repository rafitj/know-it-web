import axios from 'axios'
import { UserStore } from '../../stores/UserStore'

export const getFoldersAndNotes = async () => {
  const response = await axios.get(
    'https://know-it-back-master-x3ikbzbziy.herokuapp.com/folders/with-notes',
    UserStore.authenticationHeaders as any
  )

  console.log(response.data)
}
