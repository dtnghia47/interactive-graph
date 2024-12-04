import styled, { ThemeProvider } from 'styled-components';

import Graph from '@/components/Graph';
import { data } from '@/mocks/data';
// import TempButton from './components/TempButton';

import './App.css';

// Define our `fg` and `bg` on the theme
const theme = {
  fg: '#BF4F74',
  bg: '#FFFFFF',
  boxShadow: 'rgba(0, 0, 0, 0.1)',
  overlayBg: 'rgba(0, 0, 0, 0.5)',
  bodyColor: '#333333',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          <TitlePage>Interactive Graph Visualization</TitlePage>
          {/* <TempButton>Add Node</TempButton> */}
        </div>
        <WrapperContent>
          <Graph data={data} width={1000} height={500} />;
        </WrapperContent>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrapperContent = styled.div``;

const TitlePage = styled.h1`
  color: ${(props) => props.theme.fg};
`;

export default App;
