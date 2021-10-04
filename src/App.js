import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Music from "./components/music/music";
function App() {
  return (
    <div className="musicNotes">
      <Header></Header>
      <Music></Music>
      <Footer></Footer>

    </div>
  );
}

export default App;
