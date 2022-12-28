import React from 'react';
import {
  INavLink,
  INavLinkGroup,
  INavStyles,
  Nav
} from "@fluentui/react";

import { Link as RouterLink } from 'react-router-dom';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'Ass') {
    alert('Ass clicked');
  }
}

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        key: 'key1',

      },
      {
        name: 'Tits',
        url: '/tits',
        key: 'key2',
      },
      {
        name: 'Ass',
        url: '/ass',
        key: 'key3',
      },
    ],
  },
];

export default function Navigation() {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key1"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
      isOnTop={true}
    />
  );
}
