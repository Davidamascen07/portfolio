const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              David<span className="text-gray-300">Frota</span>
            </a>
            <p className="text-gray-500 mt-1">© 2025 David Damasceno. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Termos de Serviço</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Voltar ao Topo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
