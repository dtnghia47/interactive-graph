import { ThemeProvider } from 'styled-components';

import TempButton from './components/TempButton';

import './App.css';

// Define our `fg` and `bg` on the theme
const theme = {
  fg: '#BF4F74',
  bg: 'white',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Demo</h1>
        <TempButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
