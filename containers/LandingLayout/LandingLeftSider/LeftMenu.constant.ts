import { MenuItem } from './types';

const LeftMenu: Array<MenuItem> = [
  {
    id: 'about',
    antIcon: 'user',
    label: 'about',
    link: '/about',
  },
  {
    id: 'movies',
    antIcon: 'folder-open',
    label: 'movies',
    link: '/movies',
  },
  {
    id: 'menu1',
    antIcon: 'hourglass',
    label: 'menu 1',
    children: [
      {
        id: 'submenu1-1',
        antIcon: 'fall',
        label: 'submenu 1.1',
        link: '/',
      },
      {
        id: 'submenu1-2',
        antIcon: 'rise',
        label: 'submenu 1.2',
        link: '/',
      },
    ]
  },
  {
    id: 'menu2',
    antIcon: 'heat-map',
    label: 'menu 2',
    children: [
      {
        id: 'submenu2-1',
        antIcon: 'area-chart',
        label: 'submenu 2.1',
        link: '/',
      },
      {
        id: 'submenu2-2',
        antIcon: 'pie-chart',
        label: 'submenu 2.2',
        link: '/',
      },
      {
        id: 'submenu2-3',
        antIcon: 'dot-chart',
        label: 'submenu 2.3',
        link: '/',
      },
    ]
  },
]

export default LeftMenu;