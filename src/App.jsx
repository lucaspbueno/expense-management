import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/Login" element={ <LoginForm /> } />
    </Routes>
  );
}

export default App;
