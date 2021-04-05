import axios from 'axios'

const testAPI = async (req, res) => {
  const { data } = await axios({
    url: `${process.env.API_URL}/test`
  })
  res.status(200).json(data)
}

export default testAPI
