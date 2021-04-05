import axios from 'axios'

const fetchTestData = async () => {
  const { data } = await axios({
    headers: {
      Accept: 'application/json',
    },
    url: `${process.env.NEXT_PUBLIC_API_URL}/test`,
  })
  return data
}


export default {
  fetchTestData,
}
