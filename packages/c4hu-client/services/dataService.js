import axios from 'axios'

const fetchProject = async id => {
  const { data } = await axios({
    url: `${NEXT_PUBLIC_API_URL}/projects/${id}`,
  })
  return data
}

const fetchAllProjects = async () => {
  const { data } = await axios({
    url: `${NEXT_PUBLIC_API_URL}/projects`,
  })
  return data
}

export default {
  fetchProject,
  fetchAllProjects,
}
