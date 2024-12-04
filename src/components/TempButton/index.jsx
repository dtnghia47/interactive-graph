import styled from 'styled-components';

import { countStore } from '@/store/countStore';

const TempButton = () => {
  const { count, increaseCount } = countStore();

  return <Button onClick={() => increaseCount()}>Count is {count}</Button>;
};

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export default TempButton;
