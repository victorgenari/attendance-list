// BrowserRouter - Renderização
import { BrowserRouter } from 'react-router-dom';

// Rotas - Pages
import { RoutesApp } from './routes/index'

// Global Style
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />

        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;