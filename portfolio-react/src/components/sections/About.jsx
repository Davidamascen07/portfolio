import davidImg from '../../assets/img/Nova Imagem de Bitmap.bmp';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Sobre</span> Mim
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-400 rounded-lg"></div>
              <img 
                src={davidImg} 
                alt="David estudando" 
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Quem sou eu</h3>
            <p className="text-gray-300 mb-6">
              Meu nome é David Damasceno da Frota, sou estudante de Sistemas de Informação com formação prevista para 2025. 
              Desde sempre fui apaixonado por tecnologia e como ela pode transformar a vida das pessoas.
            </p>
            
            <p className="text-gray-300 mb-6">
              Atualmente estou focando meus estudos em desenvolvimento web full-stack, inteligência artificial e análise de dados. 
              Acredito que a combinação dessas áreas pode criar soluções inovadoras para problemas complexos.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-blue-400 mr-2"></i>
                <span className="text-gray-300">Bacharelado em SI (2025)</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                <span className="text-gray-300">Viçosa do Ceará, CE</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-2"></i>
                <span className="text-gray-300">davidddf.frota@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-blue-400 mr-2"></i>
                <span className="text-gray-300">(88) 99755-7530</span>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-block px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
