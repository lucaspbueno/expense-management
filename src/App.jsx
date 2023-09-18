import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LoginForm from './components/LoginForm';
import Expense from './pages/Expense';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/Login" element={ <LoginForm /> } />
      <Route path="/Expense" element={ <Expense /> } />
    </Routes>
  );
}

export default App;
