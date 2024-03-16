import Events from "./components/Events";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection/ScrollSection";

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <Header /> */}
      <ScrollSection />
      <Events />
      <About />
    </div>
  );
}

export default App;
