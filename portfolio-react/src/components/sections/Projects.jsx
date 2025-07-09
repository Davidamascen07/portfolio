import gecopecImg from '../../assets/img/gecopec.jpg';
import dropstoreImg from '../../assets/img/dropstore.jpg';
import siappImg from '../../assets/img/siapp.jpg';
import reactImg from '../../assets/img/portfolio.jpg';
import mobileImg from '../../assets/img/mobile.jpeg';
import mobileImg2 from '../../assets/img/mobile2.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GECOPEC - Sistema de Gestão de Cursos e Planos de Ensino',
      description: 'Sistema acadêmico completo para gestão de cursos, disciplinas, planos de ensino, cronogramas e relatórios. Interface intuitiva para coordenadores, professores e administradores.',
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      image: gecopecImg,
      demoUrl: 'https://github.com/Davidamascen07/gecopec-',
      githubUrl: 'https://github.com/Davidamascen07/gecopec-',
      category: 'Full-stack'
    },
    {
      id: 2,
      title: 'Digital Store',
      description: 'Plataforma moderna de e-commerce para tênis e calçados esportivos. Carrinho, autenticação, busca avançada, checkout e design responsivo. Desenvolvido com React, Vite e Tailwind CSS.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Material-UI'],
      image: dropstoreImg,
      demoUrl: 'https://front-end-drip.vercel.app',
      githubUrl: 'https://github.com/Davidamascen07/Front-end-drip',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'E-commerce Backend API',
      description: 'API RESTful robusta para sistema de e-commerce, com autenticação JWT, CRUD completo, validações, relacionamentos e testes automatizados. Desenvolvida com Node.js, Express, MySQL e Sequelize.',
      technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      demoUrl: 'http://localhost:3000',
      githubUrl: 'https://github.com/Davidamascen07/back-end-gt2.0',
      category: 'Backend'
    },
    {
      id: 4,
      title: 'SIAPP - Sistema Integrado de Atendimento Psicossocial',
      description: 'Sistema web completo para gestão de atendimentos psicossociais em instituições de ensino. Inclui módulos de agendamento, acompanhamento, relatórios, triagem, eventos em grupo e controle de acesso por níveis de usuário.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'AJAX'],
      image: siappImg,
      demoUrl: '#',
      githubUrl: '#',
      category: 'Full-stack'
    },
    {
      id: 5,
      title: 'Portfólio Pessoal - David Frota',
      description: 'Portfólio moderno desenvolvido com React, Vite e Tailwind CSS. Design responsivo, tema escuro, animações, formulário de contato integrado ao EmailJS e apresentação de projetos reais.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'EmailJS', 'Font Awesome'],
      image: reactImg,
      demoUrl: 'https://seu-link-vercel.app',
      githubUrl: 'https://github.com/Davidamascen07/portfolio',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Sistema Acadêmico Mobile',
      description: 'Aplicativo Android para gerenciamento acadêmico: acompanhamento de notas, faltas, histórico, perfil do aluno e dashboard. Interface moderna, tema claro/escuro e testes automatizados.',
      technologies: ['Java', 'Android', 'SQLite', 'Material Design 3', 'JUnit', 'Espresso'],
      image: mobileImg,
      demoUrl: 'https://youtube.com/shorts/MzNA-33kOKE',
      githubUrl: 'https://github.com/Davidamascen07/MOBILEPROJETO',
      category: 'Mobile'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meus <span className="text-blue-400">Projetos</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                {project.id === 6 ? (
                  <div className="flex h-full gap-2">
                    <img
                      src={mobileImg}
                      alt={project.title + ' tela 1'}
                      className="w-1/2 h-full object-cover rounded-l-lg"
                    />
                    <img
                      src={mobileImg2}
                      alt={project.title + ' tela 2'}
                      className="w-1/2 h-full object-cover rounded-r-lg"
                    />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 bg-blue-900 bg-opacity-50 text-xs rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl}
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-gray-300 text-sm flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg font-medium transition-all"
          >
            Ver Todos os Projetos
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
