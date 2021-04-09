import { List, Avatar } from 'antd'
import Link from 'next/link'

const { Item } = List

const ProjectListItem = ({ name, id, description }) => (
  <Item>
    <Item.Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={<Link href={`/projects/${id}`}><a>{name}</a></Link>}
      description={description || 'Nincs még project-leírás'}
    />
  </Item>
)

export default ProjectListItem

