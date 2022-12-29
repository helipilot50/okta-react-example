import './App.css';
import CardSection from './components/CardSection';
import OperationsTable from './components/OperationsTable';
import Tits from './components/Tits';
import Ass from './components/Ass';
import {
  Stack,
  Text,
  INavLinkGroup,
  INavStyles,
  Nav,
  initializeIcons,
} from '@fluentui/react';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';




initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
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



function App() {
  // const mainKey: MutableRefObject<string> = useRef('key1');

  // function onClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink): void {
  //   if (item && item.key)
  //     mainKey.current = item.key;
  // }

  // let mainComponent;
  // switch (mainKey.current) {
  //   case 'key1':
  //     mainComponent = <CardSection />;
  //     break;
  //   case 'key2':
  //     mainComponent = <Tits />;
  //     break;
  //   case 'key3':
  //     mainComponent = <Ass />;
  //     break;
  //   case 'key4':
  //     mainComponent = <OperationsTable />;
  //     break;
  //   default:
  //     mainComponent = <CardSection />;
  //     break;
  // }

  return (
    <Stack>
      <Text variant='xxLarge'>Example Dashboard</Text>
      <Stack horizontal>
        <Nav
          // onLinkClick={onClick}
          ariaLabel="main-nav"
          styles={navStyles}
          groups={navLinkGroups}
        // initialSelectedKey='key1'
        />
        <Routes>
          <Route path="/" element={<Navigate replace to='cards' />} />
          <Route path="cards" element={<CardSection />} />
          <Route path="tits" element={<Tits />} />
          <Route path="ass" element={<Ass />} />
          <Route path="operations" element={<OperationsTable />} />
        </Routes>
      </Stack>
    </Stack>

  );
}

export default App;
