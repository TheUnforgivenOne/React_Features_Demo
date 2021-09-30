import React from 'react';
import { Modal } from '@material-ui/core';

import { ModalWrapper } from './ModalWindow.styles';

interface ModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalWindowContent: React.ReactNode | string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isModalOpen, closeModal, modalWindowContent }) => {
  return (
    <Modal open={isModalOpen} onBackdropClick={closeModal}>
      <ModalWrapper>{modalWindowContent}</ModalWrapper>
    </Modal>
  );
};

export default ModalWindow;
