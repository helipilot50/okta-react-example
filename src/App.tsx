import './App.css';
import CardSection from './components/CardSection';
import OperationsTable from './components/OperationsTable';
import Tits from './components/Tits';
import Ass from './components/Ass';
import {
  Stack,
  Text,
  initializeIcons,
} from '@fluentui/react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navigation from './components/Navigation';

initializeIcons();


function App() {
  return (
    <Stack>
      <Text variant='xxLarge'>Example Dashboard</Text>

      <Stack horizontal>
        <Navigation />
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
