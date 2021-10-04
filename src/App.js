import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
import About from './components/about/about';
import NotFound from './components/notFound/notFound'
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="app">
      {/* Routing */}
      <BrowserRouter>
      <Switch>
        <Route path="/home">
        <Header></Header>
          <Home></Home>
          <Footer></Footer>
          </Route>
        <Route path="/about">
        <Header></Header>
          <About></About>
          <Footer></Footer>
          </Route>
        <Route path="/service">
        <Header></Header>
          <Music></Music>
          <Footer></Footer>
          </Route>
          <Route path="/contact">
        <Header></Header>
          <Contact></Contact>
          <Footer></Footer>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
