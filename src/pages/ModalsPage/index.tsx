import React from 'react';

import ContextModals from '../../components/Modals/ContextModals/ContextModals';
import StateFullModals from '../../components/Modals/StateFullModals/StateFullModals';

const ModalsPage: React.FC = () => {
  return (
    <>
      <StateFullModals />
      <ContextModals />
    </>
  );
};

export default ModalsPage;
