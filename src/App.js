
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyWork from './pages/MyWork'

function App() {

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mywork" element={<MyWork />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
