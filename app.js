import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApiData from './pages/ApiData';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-data" element={<ApiData />} />
      </Routes>
    </Router>
  );
};

export default App;
