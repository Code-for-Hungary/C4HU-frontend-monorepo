import Layout from '../../components/Layout'
import ProjectPage from '../../components/ProjectPage';
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { projectId } = router.query

  if (!projectId) return null

  return (
    <Layout title="Project adatok">
      <ProjectPage id={projectId} />
    </Layout>
  );
}

