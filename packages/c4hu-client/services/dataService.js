import axios from 'axios'

const fetchProject = async id => {
  const { data } = await axios({
    url: `/api/projects/${id}`,
  })
  return data
}

const fetchAllProjects = async () => {
  const { data } = await axios({
    url: `/api/projects`,
  })
  return data
}

export default {
  fetchProject,
  fetchAllProjects,
}
