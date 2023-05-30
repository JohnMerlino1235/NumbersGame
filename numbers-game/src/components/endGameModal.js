import * as React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

export default function EndGameModal({showModal, resetGame}) {
  const [isOpen, setIsOpen] = React.useState(showModal);
  function close() {
    setIsOpen(false);
  }
  return (
      <Modal onClose={close} isOpen={showModal}>
        <ModalHeader>Game Over</ModalHeader>
        <ModalBody>
          Unfortunately, you have lost! Better luck next time!
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="tertiary" onClick={() => resetGame}>
            Cancel
          </ModalButton>
          <ModalButton onClick={resetGame}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
  );
}
