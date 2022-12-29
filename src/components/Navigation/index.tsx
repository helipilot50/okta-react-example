import { INavLink, INavLinkGroup, Nav } from '@fluentui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const navStyles = {
  root: {
    // height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
  link: {
    border: '1px solid #eee',
  }
};


const navLinkGroups: INavLinkGroup[] = [
  {
    links: [

      {
        name: 'Dashboard',
        key: 'key1',
        url: 'cards',
        iconProps: {
          iconName: 'News',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Tits',
        key: 'key2',
        url: 'tits',
        iconProps: {
          iconName: 'PlayerSettings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Ass',
        key: 'key3',
        url: 'ass',
        iconProps: {
          iconName: 'SwitcherStartEnd',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Stats',
        key: 'key4',
        url: 'operations',
        iconProps: {
          iconName: 'StackedLineChart',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

export default function NavBar() {
  const navigate = useNavigate();
  function onNavClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void {
    ev?.preventDefault();
    // console.log(`onClick ${JSON.stringify(item, null, 2)}`);
    if (item)
      navigate(item?.url);
  }

  return (
    <Nav
      groups={navLinkGroups}
      onLinkClick={onNavClick}
      styles={navStyles} />

  );
}


