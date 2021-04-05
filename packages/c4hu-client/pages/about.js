import Link from 'next/link'
import Layout from '../components/Layout'


const AboutPage = () => {
  return (
    <Layout isProtected={false} title="Sátor">
      <div><a><Link href="/">Back</Link></a></div>
      <div>About</div>
    </Layout>
  );
}

export default AboutPage
