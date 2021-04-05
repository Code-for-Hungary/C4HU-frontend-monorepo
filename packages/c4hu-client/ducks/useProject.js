import { useDispatch } from 'react-redux'
import dataService from '../services/dataService'

const FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA'
const FETCH_PROJECT_DATA__SUCCESS = 'FETCH_PROJECT_DATA__SUCCESS'
const FETCH_PROJECT_DATA__ERROR = 'FETCH_PROJECT_DATA__ERROR'

export const initialState = {
  projectData: null,
}

const useProject = () => {
  const dispatch = useDispatch()

  const fetchProjectData = async () => {
    try {
      dispatch({ type: FETCH_PROJECT_DATA })
      const data = await dataService.fetchTestData()
      dispatch({ type: FETCH_PROJECT_DATA__SUCCESS, payload: data })
    } catch(error){
      console.log(error)
      dispatch({ type: FETCH_PROJECT_DATA__ERROR, payload: error.response })
    }
  }

  return {
    fetchProjectData,
  }
}


export const projectDataReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case FETCH_PROJECT_DATA__SUCCESS: return {
      ...state,       
      projectData: payload.data
    }


    default: return state
  }
}

export default useProject
