import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LoginAuthentication from './pages/LoginAuthentication';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/login" element={ <LoginAuthentication /> } />
    </Routes>
  );
}

export default App;
