import "./App.css";
import Header from "./components/Header";
import Home from "./sections/Home"
import About from "./sections/About"
import Project from "./sections/Project"
import Home from "./sections/Home"
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
