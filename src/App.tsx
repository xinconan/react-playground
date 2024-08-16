import ReactPlayground from './ReactPlayground';

import './App.css';
import { PlaygroundProvider } from './ReactPlayground/PlaygroundContext';
function App() {
  return (
    <PlaygroundProvider>
      <ReactPlayground />
    </PlaygroundProvider>
  );
}

export default App;
