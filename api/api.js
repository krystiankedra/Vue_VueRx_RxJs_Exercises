import { GET_USERS_URL, GET_USER_URL } from '~/urls/urls'
import { getConnector } from '~/apiConnector/apiConnector'

export const getUsers = async () => await getConnector(GET_USERS_URL)

export const getUser = async (id) => await getConnector(GET_USER_URL(id))
