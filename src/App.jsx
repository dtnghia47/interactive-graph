import styled, { ThemeProvider } from 'styled-components';

import Graph from '@/components/Graph';
import Button from './components/Button';
import { nodeStore } from '@/store/nodeStore';
import { nodesClone, invalidData } from '@/mocks/data';
import { validateNode } from '@/utils/validateNode';
import ErrorMessage from './components/ErrorMessage';

import './App.css';
import { useMemo, useState } from 'react';

const theme = {
  fg: '#BF4F74',
  bg: '#FFFFFF',
  boxShadow: 'rgba(0, 0, 0, 0.1)',
  overlayBg: 'rgba(0, 0, 0, 0.5)',
  bodyColor: '#333333',
  errorColor: 'red',
};

function App() {
  const { data, updateNodes, resetNodes } = nodeStore();
  const [isLoaded, setLoaded] = useState(false);
  const [enableInvalidData, setEnableInvalidData] = useState(false);

  const isValidData = useMemo(() => validateNode(invalidData), [invalidData]);

  const loadMoreNode = () => {
    // we can call the API in here. We should load ảound 100 items per time only
    setLoaded(true);
    updateNodes({
      nodes: [...data.nodes, ...nodesClone.nodes],
      links: [...data.links, ...nodesClone.links],
    });
  };

  const handleShowInvalidData = () => {
    // We will use isValidData to mock the error case for this demo
    setEnableInvalidData(true);
  };

  const handleResetNode = () => {
    setLoaded(false);
    resetNodes();
    setEnableInvalidData(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppHeader>
          <TitlePage>Interactive Graph Visualization</TitlePage>
          <div>
            <Button
              onClick={loadMoreNode}
              disabled={isLoaded || enableInvalidData}
            >
              Load More
            </Button>
            <Button
              onClick={handleShowInvalidData}
              disabled={enableInvalidData}
            >
              Show Error
            </Button>
            <Button onClick={handleResetNode}>Reset Node</Button>
          </div>
        </AppHeader>
        <AppContent>
          {enableInvalidData && !isValidData ? (
            <ErrorMessage
              title='inIalid data!'
              desc='Please re-check your data!'
            />
          ) : (
            <Graph data={data} width={1000} height={500} />
          )}
        </AppContent>
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
const AppHeader = styled.div`
  margin-bottom: 24px;

  button + button {
    margin-left: 20px;
  }
`;

const AppContent = styled.div``;

const TitlePage = styled.h1`
  color: ${(props) => props.theme.fg};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default App;
