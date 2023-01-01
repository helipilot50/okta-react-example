import './App.css';

import {
  Stack,
  Text,
  initializeIcons,
} from '@fluentui/react';

import Navigation from './components/Navigation';

initializeIcons();


function App() {
  return (
    <Stack>
      <Text variant='xxLarge'>Header here</Text>
      <Stack horizontal>
        <Navigation />
      </Stack>
      <Text variant='xxLarge'>Footer here</Text>
    </Stack>

  );
}

export default App;
