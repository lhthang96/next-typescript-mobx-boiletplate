import { NextPage } from 'next';
import LandingLayout from '../../containers/LandingLayout';

const AboutPage: NextPage<{userAgent: string}> = ({userAgent}) => (
  <LandingLayout path="home/about" title="About" >
    <h1>About page - user agent: {userAgent}</h1>
  </LandingLayout>
)

AboutPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  console.log('USER AGENT :', userAgent);
  return { userAgent };
}

export default AboutPage;