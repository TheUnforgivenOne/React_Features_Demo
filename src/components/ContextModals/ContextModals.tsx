import React, { useState } from 'react';
import ModalWindow from '../reusable/ModalWindow/ModalWindow';
import StyledButton from '../reusable/StyledButton/StyledButton';
import ContextModalExample from '../ContextModalExample/ContextModalExample';
import { ModalsContextProvider } from '../../context/modalsContext';

const ContextModals: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  }

  const handleModalClose = () => {
    setIsOpen(false);
  }

  return (
    <ModalsContextProvider value={handleModalOpen}>
      <ModalWindow
        isModalOpen={isOpen}
        closeModal={handleModalClose}
        modalWindowContent={
          <>
            <div>This is modal from context provider</div>
            <StyledButton onClick={handleModalClose}>Close</StyledButton>
          </>
        }
      />
      <ContextModalExample />
    </ModalsContextProvider>
  );
};

export default ContextModals;
