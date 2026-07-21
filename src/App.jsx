import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SelectedWork from "./components/SelectedWork/SelectedWork";
function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
