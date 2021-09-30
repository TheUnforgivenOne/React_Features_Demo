import React from 'react';
import StateFullModals from './components/StateFullModals/StateFullModals';
import ContextModals from './components/ContextModals/ContextModals';

const App: React.FC = () => {
  return (
    <>
      <StateFullModals />
      <ContextModals />
    </>
  );
};

export default App;
