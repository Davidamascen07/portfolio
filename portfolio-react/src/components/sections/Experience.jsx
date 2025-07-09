const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'CajuDevSistems',
      period: 'Abr 2022 - Mar 2025',
      description: 'Desenvolvimento de interfaces web responsivas usando React.js, integração com APIs REST, otimização de performance criação de aplicativos mobile.'
    },
    {
      id: 2,
      title: 'Estagiário em Desenvolvimento - Full Stack',
      company: 'Aiamis / Ies / Serviços Vinculados',
      period: 'Ago 2024 - Jun 2025',
      description: 'Desenvolvimento de Web Site para a empresa Aiamis, com a finalidade de gerenciar serviços de agendamento e atendimento do NAPSI.'
    }
  ];

  const education = [
    {
      id: 1,
      title: 'Bacharelado em Sistemas de Informação',
      institution: 'FIED IEDUCARE',
      period: '2021 - 2025',
      description: 'Formação focada em planejar, desenvolver, gerenciar e avaliar sistemas de informação. O curso alia teoria e prática, abordando programação, bancos de dados, segurança, gestão de projetos e metodologias de software. Prepara profissionais para atuar em diversos setores, com alta demanda, salários competitivos e oportunidades de crescimento, desenvolvendo habilidades técnicas, empreendedoras, liderança e trabalho em equipe.'
    },
    {
      id: 2,
      title: 'Formação Desenvolvedor Full Stack',
      institution: 'IEL - Instituto Euvaldo Lodi / ADECE',
      period: '2024',
      description: 'Certificação de 192h em Desenvolvimento Full Stack, com módulos de introdução ao desenvolvimento web, HTML, CSS, Git, GitHub, lógica de programação, JavaScript, Node.js, Express.js, banco de dados, testes automatizados (Cypress) e ReactJS. Certificado emitido pelo IEL Ceará em parceria com a ADECE.'
    },
    {
      id: 3,
      title: 'Residência em TIC 20 - Capacita Brasil (Ciência de Dados)',
      institution: 'UECE / Softex / MCTI',
      period: '2025',
      description: 'Formação intensiva em Ciência de Dados com 240h, abrangendo fundamentos de IA, mineração e análise de dados, estatística, programação em Python, machine learning supervisionado e não supervisionado, deep learning, NLP, visão computacional e projetos práticos. Certificação pelo Programa Residência em TIC 20 - Capacita Brasil C-Jovem, promovido pela UECE, Softex e MCTI.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Experiência</span> & Educação
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Work Experience */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <i className="fas fa-briefcase text-blue-400 mr-3"></i> Experiência Profissional
            </h3>
            
            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-900 rounded-full"></div>
              
              {workExperience.map((exp, index) => (
                <div key={exp.id} className="relative pl-16 mb-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-400 border-4 border-gray-900 flex items-center justify-center">
                    <i className="fas fa-check text-xs text-gray-900"></i>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-blue-400 mr-3"></i> Educação
            </h3>
            
            <div className="relative">
              {/* Timeline bar */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-900 rounded-full"></div>
              
              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-16 mb-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-400 border-4 border-gray-900 flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-xs text-gray-900"></i>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-lg font-semibold mb-1">{edu.title}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
