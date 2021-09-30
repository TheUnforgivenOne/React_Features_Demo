import React, { useState } from 'react';
import StyledButton from '../reusable/StyledButton/StyledButton';
import ModalWindow from '../reusable/ModalWindow/ModalWindow';

import { Wrapper, Buttons } from './StateFullModals.styles';

const StateFullModals: React.FC = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const handleFirstModalOpen = () => {
    setFirstModalOpen(true);
  }

  const handleFirstModalClose = () => {
    setFirstModalOpen(false);
  }

  const handleSecondModalOpen = () => {
    setSecondModalOpen(true);
  }

  const handleSecondModalClose = () => {
    setSecondModalOpen(false);
  }

  return (
    <>
      <Wrapper>
        <h3>Modals with local state demo</h3>
        <Buttons>
          <StyledButton onClick={handleFirstModalOpen}>Open first modal</StyledButton>
          <StyledButton onClick={handleSecondModalOpen}>Open second modal</StyledButton>
        </Buttons>
      </Wrapper>
      <ModalWindow
        isModalOpen={isFirstModalOpen}
        closeModal={handleFirstModalClose}
        modalWindowContent={
          <>
            <div>First Modal Content</div>
            <StyledButton onClick={handleFirstModalClose}>Close</StyledButton>
          </>
        }
      />
      <ModalWindow
        isModalOpen={isSecondModalOpen}
        closeModal={handleSecondModalClose}
        modalWindowContent={
          <>
            <div>Second Modal Content</div>
            <StyledButton onClick={handleSecondModalClose}>Close</StyledButton>
          </>
        }
      />
    </>
  );
}

export default StateFullModals;
