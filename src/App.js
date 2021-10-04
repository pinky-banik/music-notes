import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Music from './components/music/music';
function App() {
  return (
    <div className="musicNotes">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>

    </div>
  );
}

export default App;
