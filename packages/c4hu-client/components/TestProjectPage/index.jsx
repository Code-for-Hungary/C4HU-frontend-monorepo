import {
  Descriptions,
  Badge,
  Tag,
} from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import useProject from '../../ducks/useProject';
import { LoadingOutlined } from '@ant-design/icons'

const { Item } = Descriptions

const TestProjectPage = () => {

  const { fetchProjectData } = useProject()

  useEffect(fetchProjectData, [])

  const projectData = useSelector(state => state.project.projectData || null, shallowEqual)

  if (!projectData) return <LoadingOutlined />


  const {
    name,
    startdate,
    description,
    owner,
    status,
    types,
    categories,
    skills,
  } = projectData

  return (
    <Descriptions title={name} layout="vertical" bordered>
      <Item label="Leírás" span={3}>{description || '-'}</Item>
      <Item label="Tulajdonos">{owner.name}</Item>
      <Item label="Kezdete" span={2}>
        {startdate}
      </Item>
      <Item label="Státusz" span={3}>
        <Badge status="processing" text={status.name} />
      </Item>
      <Item label="Típus">
        {types.map(({ id, name }) => (
          <Tag key={id}>{name}</Tag>
        ))}
      </Item>
      <Item label="Kategória">
        {categories.map(({ id, name }) => (
          <Tag key={id}>{name}</Tag>
        ))}
      </Item>
      <Item label="Skillek">
        {skills.map(({ id, name }) => (
          <Tag key={id}>{name}</Tag>
        ))}
      </Item>
    </Descriptions>
  )
}

export default TestProjectPage
