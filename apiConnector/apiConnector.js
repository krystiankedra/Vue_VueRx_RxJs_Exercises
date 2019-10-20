import axios from '~/plugins/axios'

export const getConnector = async (url) => {
  try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.log(error)
  }
}

export const postConnector = async (url, payload) => {
  try {
      await axios.post(url, payload)
    } catch (error) {
      console.log(error)
  }
}
