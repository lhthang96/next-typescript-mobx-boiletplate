import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

interface Props {
  title?: string;
}

const LandingHeader: FC<Props> = ({title}) => {
  return (
    <Header className="header">
      <p style={{color: '#fff'}} >NextJS + TypeScript boilerplate || {title || 'Home'} </p>
    </Header>
  )
}

export default LandingHeader;