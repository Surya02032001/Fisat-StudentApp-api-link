import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import Search from './Components/Search';
import ViewAll from './Components/ViewAll';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/ViewAll" element={<ViewAll/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
