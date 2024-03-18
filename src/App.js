import Events from "./components/Events";
import Vision from "./components/Vision";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollSection />
      <About />
      <Events />
      <Vision />
      <Team />
      <Hero />
    </div>
  );
}

export default App;
