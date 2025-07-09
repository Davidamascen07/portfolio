import { useEffect, useState } from 'react';
import perfilImg from '../../assets/img/perfil.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className={`md:w-1/2 mb-12 md:mb-0 ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olá, eu sou <span className="text-blue-400">David Damasceno</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Bacharel em Sistemas de Informação
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras e eficientes.
            Formando em 2025 com foco em desenvolvimento web, análise de sistemas e inteligência artificial.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 glow-effect"
            >
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg font-medium transition-all hover:scale-105 glow-effect"
            >
              Contato
            </a>
          </div>
        </div>
        <div className={`md:w-1/2 flex justify-center ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <img 
              src={perfilImg} 
              alt="David Damasceno" 
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
