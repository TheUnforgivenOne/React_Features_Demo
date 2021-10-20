import React, { useContext } from 'react';
import StyledButton from '../Reusable/StyledButton/StyledButton';
import ModalsContext from '../../context/modalsContext';

const ContextModalExample: React.FC = () => {
  const handleModalOpen = useContext(ModalsContext);

  return (
    <>
      <h2>Context modal example</h2>
      {/* @ts-ignore */}
      <StyledButton onClick={handleModalOpen}>Open context modal</StyledButton>
    </>
  );
};

export default ContextModalExample;
