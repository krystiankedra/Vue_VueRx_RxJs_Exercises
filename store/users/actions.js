import { SET_USERS, SET_USER } from '~/store/mutationTypes'
import { getUsers, getUser } from '~/api/api'

export default {
  async getUsers({ commit }) {
    commit(SET_USERS, await getUsers())
  },
  async getUser({ commit }, payload) {
    commit(SET_USER, await getUser(payload))
  }
}