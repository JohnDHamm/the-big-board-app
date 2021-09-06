import React from 'react';

declare global {
  type ActiveOwners = string[];
  interface ActiveOwnersContextInterface {
    activeOwners: ActiveOwners;
    setCurrentActiveOwners: (activeOwners: ActiveOwners) => void;
  }
}

export const ACTIVE_OWNERS_DEFAULT_VALUE: ActiveOwnersContextInterface = {
  activeOwners: [],
  setCurrentActiveOwners: () => [],
};

export const ActiveOwnersContext =
  React.createContext<ActiveOwnersContextInterface>(
    ACTIVE_OWNERS_DEFAULT_VALUE
  );
