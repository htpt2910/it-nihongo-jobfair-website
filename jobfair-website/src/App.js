import './App.css';
import MenuNavigation from './components/Menu';
import NavBar from './components/NavBar';
import Post from './components/質問解答方法/post'

import ToDos from './pages/ToDoPage';
import Invoices from "./pages/Invoices";
import {
  Routes,
  Route,
} from "react-router-dom";
import FrequentlyAsk from './pages/FrequentlyAsk';
import Login from './pages/Login';
import YourList from './components/todoList/YourList';
function App() {
  var hasList = true;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/fqask" element={<FrequentlyAsk />}/>
        <Route path="/todo" element={<ToDos hasList={hasList} />}/>
        <Route path="/yourList" element={<YourList hasList={hasList}  />}/>
      </Routes>
    </div>
  );
}

export default App;

