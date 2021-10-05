import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
