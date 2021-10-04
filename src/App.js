import './App.css';
import Header from './components/header/header';
import Music from "./components/music/music";
import Footer from './components/footer/footer';
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
