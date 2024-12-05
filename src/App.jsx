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
    setEnableInvalidData(true);
  };

  const handleResetNode = () => {
    setLoaded(false);
    resetNodes();
    setEnableInvalidData(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          <TitlePage>Interactive Graph Visualization</TitlePage>
          <div>
            <Button
              onClick={loadMoreNode}
              disabled={isLoaded || enableInvalidData}
            >
              Load More Node
            </Button>
            <Button
              onClick={handleShowInvalidData}
              disabled={enableInvalidData}
            >
              Show Invalid Data
            </Button>
            <Button onClick={handleResetNode}>Reset Node</Button>
          </div>
        </div>
        <WrapperContent>
          {enableInvalidData && !isValidData ? (
            <ErrorMessage
              title='inIalid data!'
              desc='Please re-check your data!'
            />
          ) : (
            <Graph data={data} width={1000} height={500} />
          )}
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
