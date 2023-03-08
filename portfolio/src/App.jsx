import "./App.css";
import Header from "./components/Header";
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
     <div className="hidden"><SocialMedia /></div> 
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
