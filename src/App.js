import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import SearchTodo from './Components/SearchTodo';
import DeleteTodo from './Components/DeleteTodo';
import ViewTodo from './Components/ViewTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Add" element={<AddTodo/>}/>
      <Route path="/View" element={<ViewTodo/>}/>
      <Route path="/Search" element={<SearchTodo/>}/>
      <Route path="/Delete" element={<DeleteTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
