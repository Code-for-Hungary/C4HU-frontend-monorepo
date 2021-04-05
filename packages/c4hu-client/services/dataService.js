import axios from 'axios'

const fetchTestData = async () => {
  const { data } = await axios({
    url: `/api/test`,
  })
  return data
}


export default {
  fetchTestData,
}
