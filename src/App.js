import Events from "./components/Events";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />  
      <Events />
      <About />
    </div>
  );
}

export default App;
