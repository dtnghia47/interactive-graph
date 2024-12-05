import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, title, isBackdrop, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      {/* We can press on node. So we don't need to add backdrop for this */}
      {isBackdrop && <ModalBackdrop onClick={onClose} />}
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

// TODO: add the animation for modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  background: ${(props) => props.theme.overlayBg};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 10px;
`;

const ModalContainer = styled.div`
  min-width: 300px;
  width: 100%;
  background: ${(props) => props.theme.bg};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px ${(props) => props.theme.boxShadow};
  position: relative;
  z-index: 1001;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.fg};
  padding-bottom: 10px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  align-items: center;
  color: ${(props) => props.theme.fg};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333; // no need to use variable
`;

const ModalBody = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.bodyColor};
`;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Modal;
