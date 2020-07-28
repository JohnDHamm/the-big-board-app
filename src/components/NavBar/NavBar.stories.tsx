import React from 'react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('NavBar'),
  decorators: [
    (getStory: () => React.ReactNode) => (
      <MemoryRouter initialEntries={['/app/board']}>{getStory()}</MemoryRouter>
    ),
  ],
};

export const Default = () => (
  <div style={{ width: '100%', height: '400px', backgroundColor: 'lightgrey' }}>
    <NavBar />
  </div>
);

export const Disabled = () => <NavBar disabled={true} />;
