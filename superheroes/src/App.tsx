import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { HeroesProvider } from './heroesContext';

function App() {
  return (
    <HeroesProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </HeroesProvider>
  );
}

export default App;
