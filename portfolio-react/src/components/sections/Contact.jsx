import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // IDs do EmailJS configurados
      const result = await emailjs.send(
        'service_zk1ip3g',
        'template_kz22aqj',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'David', // Seu nome
        },
        'oG2R3SNIS0yEAwm3e'
      );

      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      content: 'davidddf.frota@gmail.com',
      link: 'mailto:davidddf.frota@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telefone',
      content: '+55 (88) 9 99755-7530',
      link: 'tel:+5588997557530'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Localização',
      content: 'Viçosa do Ceará, CE - Brasil',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/damascenodf'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/Davidamascen07'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: 'https://x.com/daviddbeta'
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/david_damasceno_'
    },
    {
      icon: 'fab fa-whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/5588997557530'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Entre em <span className="text-blue-400">Contato</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Vamos conversar!</h3>
            <p className="text-gray-300 mb-8">
              Estou sempre aberto a novas oportunidades, projetos desafiadores ou simplesmente para conversar sobre tecnologia. 
              Sinta-se à vontade para me contatar através do formulário ou diretamente pelos meios listados.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-900 bg-opacity-50 rounded-lg mr-4">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">davidddf.frota@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-900 bg-opacity-50 rounded-lg mr-4">
                  <i className="fas fa-phone-alt text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-400">(88) 99755-7530</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-blue-900 bg-opacity-50 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-gray-400">Viçosa do Ceará, Ceará, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-900 bg-opacity-50 flex items-center justify-center text-blue-400 hover:bg-blue-700 transition-colors"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  placeholder="seu@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  placeholder="Sobre o que gostaria de conversar?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" 
                  placeholder="Sua mensagem"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-all hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
