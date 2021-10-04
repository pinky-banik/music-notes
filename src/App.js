import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
import About from './components/about/about';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/about">
          <About></About>
          </Route>
        <Route path="/service">
          <Music></Music>
          </Route>
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
