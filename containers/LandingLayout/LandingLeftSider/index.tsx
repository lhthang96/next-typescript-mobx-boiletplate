import React, { FC } from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { Icon, Layout, Menu } from 'antd';

import { MenuItem } from './types';
import LeftMenu from './LeftMenu.constant';

const { Sider } = Layout;
const { SubMenu } = Menu;

const LandingLeftSider: FC = () => {
  const renderSubMenu = ( menuItem: MenuItem ): JSX.Element => (
    <SubMenu
      key={menuItem.id}
      title={
        <span>
          <Icon type={menuItem.antIcon} />
          <span>{_.capitalize(menuItem.label)}</span>
        </span>
      }
    >
    {
      menuItem.children.map(subMenuItem => (
        <Menu.Item key={subMenuItem.id}>
          <Link href={subMenuItem.link} >
            <span>
              <Icon type={subMenuItem.antIcon} />
              <span>{_.capitalize(subMenuItem.label)}</span>
            </span>
          </Link>
        </Menu.Item>
      ))
    }
    </SubMenu>
  )

  const renderLeftMenu = (): JSX.Element => {
    return (
      <Menu
        key="left-menu"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
      {
        LeftMenu.map(menu => (
          menu.children
            ? renderSubMenu(menu)
            : (
              <Menu.Item key={menu.id}>
                <Link href={menu.link} >
                  <span>
                    <Icon type={menu.antIcon} />
                    <span>{_.capitalize(menu.label)}</span>
                  </span>
                </Link>
              </Menu.Item>
            )
        ))
      }
      </Menu>
    )
  }

  return (
    <Sider width={200} style={{ background: '#fff' }}>
      {renderLeftMenu()}
    </Sider>
  )
}

export default LandingLeftSider;