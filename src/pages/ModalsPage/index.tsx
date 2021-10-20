import React from 'react';

import ContextModals from '../../components/ContextModals/ContextModals';
import StateFullModals from '../../components/StateFullModals/StateFullModals';

const ModalsPage: React.FC = () => {
  return (
    <>
      <StateFullModals />
      <ContextModals />
    </>
  );
};

export default ModalsPage;
