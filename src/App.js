import Home from "./components/Home";
import Nav from "./components/Nav";
import SocialLinks from "./components/SocialLinks";
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Conctact from "./components/Conctact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Conctact />

      <SocialLinks />
    </div>
  );
}

export default App;
