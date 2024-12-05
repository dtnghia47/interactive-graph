import styled from 'styled-components';

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <ButtonEl disabled={disabled} onClick={() => onClick && onClick()}>
      {children}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
