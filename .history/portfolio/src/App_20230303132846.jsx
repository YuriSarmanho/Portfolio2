import "./App.css";
import Header from "./components/Header";
import Home from "."
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
