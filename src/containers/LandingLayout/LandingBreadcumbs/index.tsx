import React, {FC} from 'react';
import _ from 'lodash';
import { Breadcrumb } from 'antd';

interface Props {
  path?: string;
}

const LandingBreadcumbs: FC<Props> = ({ path }) => {
  const renderBreadcumbs = (): Array<JSX.Element> => {
    const breadcumbElements: Array<string> = path ? _.split(path, '/') : ['Home'];
    return breadcumbElements.map(breadcumb => (
      <Breadcrumb.Item key={breadcumb}>{_.capitalize(breadcumb)}</Breadcrumb.Item>
    ))
  }
  
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {renderBreadcumbs()}
    </Breadcrumb>
  )
}

export default LandingBreadcumbs;