import React, { FC } from 'react';
import _ from 'lodash';

import { Layout } from 'antd';
import LandingBreadcumbs from './LandingBreadcumbs';
import LandingHeader from './LandingHeader';
import LandingLeftSider from './LandingLeftSider';

import styles from './index.scss';

const { Content } = Layout;

interface Props {
  path?: string;
  title?: string;
}

const LandingLayout: FC<Props> = ({ children, path, title }) => {
  return (
    <Layout>
      <LandingHeader title={title} />
      <Layout>
        <LandingLeftSider />
        <Layout className={styles['page-content']}>
          <LandingBreadcumbs path={path} />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LandingLayout;