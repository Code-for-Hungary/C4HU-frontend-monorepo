import axios from 'axios'

const oneProject = async (req, res) => {
  const { data } = await axios({
    url: `${process.env.API_URL}/projects/${req.query.id}`
  })
  res.status(200).json(data)
}

export default oneProject

