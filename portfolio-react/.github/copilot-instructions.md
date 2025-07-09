<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instruções para o GitHub Copilot

Este é um projeto de portfólio pessoal desenvolvido com React + Vite e Tailwind CSS.

## Contexto do Projeto

- **Tecnologias principais**: React, Vite, Tailwind CSS
- **Estrutura**: Componentes modulares organizados em `components/layout` e `components/sections`
- **Estilo**: Tailwind CSS com tema escuro (gray-900/gray-800)
- **Responsividade**: Design mobile-first com breakpoints do Tailwind
- **Ícones**: Font Awesome 6.4.0

## Diretrizes de Código

### Componentes
- Use componentes funcionais com hooks
- Mantenha componentes pequenos e reutilizáveis
- Organize em pastas: `layout/` para Header/Footer, `sections/` para seções principais
- Use nomes descritivos e em PascalCase

### Styling
- Use classes do Tailwind CSS preferencialmente
- Tema de cores: gray-900 (fundo principal), gray-800 (cards), blue-400/blue-600 (destaques)
- Mantenha consistência no espaçamento: py-20 para seções, px-6 para container
- Use transições suaves: `transition-colors`, `hover:` states

### Estrutura de Arquivos
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       └── Contact.jsx
├── hooks/
└── App.jsx
```

### Padrões de Código
- Use `const` para componentes funcionais
- Prefira destructuring para props
- Use hooks personalizados para lógica reutilizável
- Mantenha estado local quando possível
- Use nomes em português para o conteúdo (é um portfólio brasileiro)

### Responsividade
- Mobile-first approach
- Breakpoints: `md:` (768px+), `lg:` (1024px+)
- Use `flex-col md:flex-row` para layouts adaptativos
- Grid responsivo: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Animações
- Use classes CSS customizadas para animações (já definidas no index.css)
- Implemente intersection observer para animações on-scroll
- Mantenha animações sutis e profissionais
