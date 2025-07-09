const Skills = () => {
  const technicalSkills = [
    { name: 'Java (Android)', stars: 4 },
    { name: 'React.js / Vite', stars: 4.5 },
    { name: 'Node.js / Express', stars: 4 },
    { name: 'PHP', stars: 4 },
    { name: 'MySQL / SQLite', stars: 4.5 },
    { name: 'Tailwind CSS', stars: 4 },
    { name: 'Material Design', stars: 4 },
    { name: 'Git / GitHub', stars: 4 },
    { name: 'JUnit / Espresso', stars: 3.5 },
    { name: 'JavaScript / TypeScript', stars: 4 },
    { name: 'HTML5 / CSS3', stars: 4 },
  ];

  const softSkills = [
    'Resolução de Problemas',
    'Trabalho em Equipe',
    'Comunicação Eficaz',
    'Gestão de Tempo',
    'Adaptabilidade',
  ];

  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Basico' },
    { name: 'Espanhol', level: 'Basico' },
  ];

  const learningTechnologies = [
    'Machine Learning',
    'Cloud Computing',
    'DevOps',
    'Flutter',
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }
    return stars;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-blue-400">Habilidades</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
            <div className="text-center mb-6">
              <i className="fas fa-code text-4xl text-blue-400 mb-3"></i>
              <h3 className="text-xl font-semibold">Técnicas</h3>
            </div>
            <ul className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className="flex-1">{skill.name}</span>
                  <div className="ml-auto flex">
                    {renderStars(skill.stars)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
            <div className="text-center mb-6">
              <i className="fas fa-brain text-4xl text-blue-400 mb-3"></i>
              <h3 className="text-xl font-semibold">Comportamentais</h3>
            </div>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Languages */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow">
            <div className="text-center mb-6">
              <i className="fas fa-language text-4xl text-blue-400 mb-3"></i>
              <h3 className="text-xl font-semibold">Idiomas</h3>
            </div>
            <ul className="space-y-4">
              {languages.map((language, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{language.name}</span>
                  <span className="px-2 py-1 bg-blue-900 bg-opacity-50 text-xs rounded">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Atualmente aprendendo:</h4>
              <div className="flex flex-wrap gap-2">
                {learningTechnologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
