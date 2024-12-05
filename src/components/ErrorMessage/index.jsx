import styled from 'styled-components';

const ErrorMessage = ({ title, desc }) => {
  return (
    <ErrorMessageWrapper>
      <ErrorTitle>{title}</ErrorTitle>
      {desc && <ErrorDesc>{desc}</ErrorDesc>}
    </ErrorMessageWrapper>
  );
};

const ErrorMessageWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.errorColor};
`;

const ErrorTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.errorColor};
`;

const ErrorDesc = styled.div`
  font-size: 14px;
  margin-top: 16px;
  color: ${(props) => props.theme.errorColor};
`;

export default ErrorMessage;
