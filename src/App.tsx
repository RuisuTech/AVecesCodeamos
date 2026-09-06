import NavBar from "./components/NavBar.tsx";
import HeroBar from "./components/HeroBar.tsx";
import About from "./components/About.tsx";
import SectionPreguntas from "./components/SectionPreguntas.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-netflix-dark">
      <NavBar />
      <HeroBar />
      <About />
      <SectionPreguntas />
      <Footer />
    </div>
  );
}

export default App;
