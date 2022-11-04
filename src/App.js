import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Main from './component/Main';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
