import {
  Stack,
  Text
} from '@fluentui/react';
import React from 'react';
import CardSections from '../CardSection';
import { OperationsList } from '../Operations/OperationsList';

function Dashboard() {
  return (
    <Stack>
      <Text variant='xxLarge'>Dashboard</Text>
      <CardSections />
      <OperationsList />
    </Stack>
  );
}

export default Dashboard;