import { useEffect } from 'react';
import { List } from 'antd'
import { shallowEqual, useSelector } from 'react-redux'
import useProject from '../../ducks/useProject';
import ProjectListItem from '../ProjectListItem';


const ProjectListPage = () => {
  const { fetchAllProjects } = useProject()

  useEffect(fetchAllProjects, [])

  const projectListData = useSelector(state => state.project.allProjects || [], shallowEqual)

  return (
    <List
      itemLayout="horizontal"
      dataSource={projectListData}
      renderItem={ProjectListItem}
    />
  )
}

export default ProjectListPage
