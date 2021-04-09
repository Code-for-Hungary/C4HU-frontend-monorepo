import { useDispatch } from 'react-redux'
import dataService from '../services/dataService'

const FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA'
const FETCH_PROJECT_DATA__SUCCESS = 'FETCH_PROJECT_DATA__SUCCESS'
const FETCH_PROJECT_DATA__ERROR = 'FETCH_PROJECT_DATA__ERROR'

const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS'
const FETCH_ALL_PROJECTS__SUCCESS = 'FETCH_ALL_PROJECTS__SUCCESS'
const FETCH_ALL_PROJECTS__ERROR = 'FETCH_ALL_PROJECTS__ERROR'

export const initialState = {
  projectData: null,
}

const useProject = () => {
  const dispatch = useDispatch()

  const fetchProjectData = async projectId => {
    try {
      dispatch({ type: FETCH_PROJECT_DATA })
      const data = await dataService.fetchProject(projectId)
      dispatch({ type: FETCH_PROJECT_DATA__SUCCESS, payload: data })
    } catch(error){
      console.log(error)
      dispatch({ type: FETCH_PROJECT_DATA__ERROR, payload: error.response })
    }
  }

  const fetchAllProjects = async () => {
    try {
      dispatch({ type: FETCH_ALL_PROJECTS })
      const { data } = await dataService.fetchAllProjects()
      dispatch({ type: FETCH_ALL_PROJECTS__SUCCESS, payload: data })
    } catch(error){
      console.log(error)
      dispatch({ type: FETCH_ALL_PROJECTS__ERROR, payload: error.response })
    }
  }

  return {
    fetchProjectData,
    fetchAllProjects,
  }
}


export const projectDataReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case FETCH_PROJECT_DATA__SUCCESS: return {
      ...state,       
      projectData: payload.data
    }

    case FETCH_ALL_PROJECTS__SUCCESS: return {
      ...state,
      allProjects: payload
    }


    default: return state
  }
}

export default useProject
