import React from 'react';
import OwnersStatus from './OwnersStatus';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('OwnersStatus'),
  component: OwnersStatus,
};

const testOwners: Owner[] = [
  {
    _id: '1',
    name: 'First',
    leagueId: '123',
    isCommish: false,
  },
  {
    _id: '2',
    name: 'Second',
    leagueId: '123',
    isCommish: false,
  },
  {
    _id: '3',
    name: 'Third',
    leagueId: '123',
    isCommish: false,
  },
];

const testActiveOwners: string[] = ['1', '3'];

const handleClick = () => console.log('Button clicked');

export const Default = () => (
  <OwnersStatus
    owners={testOwners}
    activeOwners={testActiveOwners}
    onButtonPress={handleClick}
  />
);
