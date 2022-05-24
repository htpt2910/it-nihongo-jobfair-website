import './App.css';
import NavBar from './components/NavBar';
import Post from './components/質問解答方法/post'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route path='/質問解答方法' component={() => <Post />} />
        </Switch>
        
      </header>
    </BrowserRouter>
  );
}

export default App;
