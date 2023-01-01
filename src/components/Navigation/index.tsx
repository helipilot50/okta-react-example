import { INavLink, INavLinkGroup, Nav } from '@fluentui/react';
import React, { Fragment } from 'react';
import {
  useNavigate,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Lamps from '../Lamps';
import EiffelTour from '../EiffelTour';
import FineForm from '../FineForm';
import Sunset from '../Sunset';
import Dashboard from '../Dashboard';
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
        url: 'dashboard',
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
        name: 'Sunset',
        key: 'key2',
        url: 'sunset',
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
        name: 'Lamps',
        key: 'key3',
        url: 'lamps',
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
        name: 'La Eiffel Tour',
        key: 'key5',
        url: 'eiffeltour',
        iconProps: {
          iconName: 'WebAppBuilderModule',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Fine Form',
        key: 'key6',
        url: 'fineform',
        iconProps: {
          iconName: 'PageHeaderEdit',
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

export default function Navigation() {
  const navigate = useNavigate();
  function onNavClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void {
    ev?.preventDefault();  // prevent navigation to the url
    if (item)
      navigate(item?.url);
  }

  return (
    <Fragment>
      <Nav
        groups={navLinkGroups}
        onLinkClick={onNavClick}
        styles={navStyles} />
      <Routes>
        <Route path="/" element={<Navigate replace to='dashboard' />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sunset" element={<Sunset />} />
        <Route path="lamps" element={<Lamps />} />
        <Route path="eiffeltour" element={<EiffelTour />} />
        <Route path="fineform" element={<FineForm />} />
      </Routes>
    </Fragment>

  );
}


