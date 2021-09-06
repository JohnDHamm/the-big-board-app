import React from 'react';

export const useActiveOwners = (): ActiveOwnersContextInterface => {
  const [activeOwners, setActiveOwners] = React.useState<ActiveOwners>([]);

  const setCurrentActiveOwners = React.useCallback(
    (currentActiveOwners: ActiveOwners): void => {
      setActiveOwners(currentActiveOwners);
    },
    []
  );

  return { activeOwners, setCurrentActiveOwners };
};
