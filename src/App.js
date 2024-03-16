import Events from "./components/Events";
import Vision from "./components/Vision";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <Header /> */}
      <ScrollSection />
      <About />
      <Events />
      <Vision />
    </div>
  );
}

export default App;
