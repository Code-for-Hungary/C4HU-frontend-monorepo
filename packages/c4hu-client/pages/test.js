import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import TestProjectPage from '../components/TestProjectPage';

const HomePage = () => {
  const router = useRouter()

  return (
    <Layout title="Project adatok">
      <TestProjectPage />
    </Layout>
  );
}

export default HomePage

