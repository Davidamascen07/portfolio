import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './App.css';

function App() {
  // Inicializar o intersection observer
  useIntersectionObserver();

  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
