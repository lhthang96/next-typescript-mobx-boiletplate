import { NextPage } from 'next';
import LandingLayout from '../containers/LandingLayout';
import Link from 'next/link';

import { Button } from 'antd';

const Home: NextPage<{userAgent: string}> = ({userAgent}) => (
  <LandingLayout>
    <h1>Hello world - user agent: {userAgent}</h1>
    <Link href="/about">
      <Button>Link to About</Button>
    </Link>
    <Link href="/movies">
      <Button>Link to Movies</Button>
    </Link>
  </LandingLayout>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
}

export default Home;