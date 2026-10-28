import { Project, TechSkill, Milestone, Certification } from '../types';
import tutorImg from '../assets/images/project_online_tutor_1793225949038.jpg';
import bankopsImg from '../assets/images/project_bankops_monitor_1793225950185.jpg';
import zamaniImg from '../assets/images/project_zamani_cuisine_1793225950433.jpg';
import aumaLogoImg from '../assets/images/auma_logo.png';

export const PERSONAL_INFO = {
  name: 'Radka Nhapulo',
  titles: [
    'Software Engineer',
    'Backend Developer',
    'Data Analyst',
    'Founder of AUMA',
    'Certified Digital Consultant',
    'Certified UI/UX Designer',
  ],
  education: "Bachelor's in Software Engineering (2022–2026) — Kazan Federal University, Russia",
  certificationsSummary: 'Certified Digital Consultant · Certified UI/UX Designer',
  location: 'Maputo, Mozambique',
  email: 'radka.fnhapulo@gmail.com',
  github: 'https://github.com/radQueen258',
  linkedin: 'https://linkedin.com/in/radka-nhapulo',
  whatsapp: 'https://wa.me/258840000000', // Mozambique country code +258
  aumaWebsite: '#',
  portraitImage: './assets/aistudio/Polished_Pink_Blazer_Headshot_846259b4.png',
  aumaLogo: aumaLogoImg,
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-digital-consultant',
    title: {
      en: 'Digital Consultant — Certified',
      pt: 'Consultora Digital — Certificada',
    },
    badge: {
      en: 'Professional Certification',
      pt: 'Certificação Profissional',
    },
    issuer: 'Digital Consulting Standards',
    issueDate: '2026',
    description: {
      en: 'Specialized certification in strategic technology advisory, enterprise digital transformation frameworks, modern software architecture evaluation, and aligning business objectives with digital product execution.',
      pt: 'Certificação especializada em assessoria tecnológica estratégica, estruturas de transformação digital corporativa, avaliação de arquitetura de software e alinhamento de metas de negócio com execução de produtos.',
    },
    competencies: [
      'Digital Transformation Strategy',
      'Technology Needs Assessment',
      'Business Process Modernization',
      'Software Architecture Advisory',
      'Client Stakeholder Management',
    ],
    status: 'verified',
  },
  {
    id: 'cert-uiux-designer',
    title: {
      en: 'UI/UX Designer — Certified',
      pt: 'Designer UI/UX — Certificada',
    },
    badge: {
      en: 'Professional Certification',
      pt: 'Certificação Profissional',
    },
    issuer: 'User Experience & Design Board',
    issueDate: '2026',
    description: {
      en: 'Certified in user-centred design methodologies (UCD), qualitative and quantitative user research, information architecture, wireframing, high-fidelity responsive prototyping, and scalable design system creation.',
      pt: 'Certificação em metodologias de design centrado no utilizador (UCD), pesquisa de utilizadores, arquitetura de informação, wireframes, prototipagem responsiva de alta fidelidade e criação de design systems.',
    },
    competencies: [
      'User-Centred Design (UCD)',
      'Wireframing & Interactive Prototyping',
      'Design Systems & Tokens',
      'Usability Testing & Accessibility (WCAG)',
      'Information Architecture',
    ],
    status: 'verified',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'online-tutor',
    title: 'AI-Powered Online Tutor',
    category: 'ai',
    tagline: {
      en: 'Empowering Mozambican high school students for national examinations through interactive LLM guidance',
      pt: 'Capacitando estudantes moçambicanos para os exames nacionais com orientação interativa via LLM',
    },
    description: {
      en: 'University capstone project engineered with Java and Spring Boot. Integrates modern Large Language Models to deliver personalized tutoring, curriculum-aligned practice quizzes, and automated concept explanations for Mozambican national exam candidates.',
      pt: 'Projeto de final de curso desenvolvido em Java e Spring Boot. Integra Modelos de Linguagem para tutoria personalizada, questionários alinhados com o currículo nacional de Moçambique e explicações automáticas de conceitos.',
    },
    longDescription: {
      en: 'Developed as my graduation capstone at Kazan Federal University, this system directly addresses educational disparities in Mozambique. Built with a robust Java & Spring Boot backend, it interfaces with generative AI endpoints to translate textbook curriculum standards into interactive Socratic tutoring sessions, step-by-step problem breakdowns, and real-time student self-assessments.',
      pt: 'Desenvolvido como projeto de conclusão de curso na Universidade Federal de Kazan, este sistema foca em mitigar disparidades educacionais em Moçambique. Construído com backend em Java e Spring Boot, conecta-se a modelos de IA para transformar matérias didáticas em sessões socráticas interativas e avaliações diagnósticas.',
    },
    technologies: ['Java', 'Spring Boot', 'LLM Integration', 'PostgreSQL', 'REST APIs', 'Docker'],
    githubUrl: 'https://github.com/radQueen258/onlineTutor',
    image: tutorImg,
    featured: true,
    year: '2026',
    architectureHighlights: {
      en: [
        'Spring Boot REST architecture with modular service layers and clean controller separation',
        'LLM prompt engineering pipeline with educational guardrails and Mozambican curriculum context',
        'Relational data persistence for student exam progress, quiz scores, and subject metrics',
        'Secure session handling and asynchronous model response streaming',
      ],
      pt: [
        'Arquitetura REST em Spring Boot com camadas de serviço desacopladas e controladores limpos',
        'Pipeline de engenharia de prompts com regras pedagógicas e contexto curricular de Moçambique',
        'Persistência relacional para progresso dos estudantes, pontuações e métricas por disciplina',
        'Gestão segura de sessões e comunicação assíncrona com os modelos de linguagem',
      ],
    },
  },
  {
    id: 'bankops-monitor',
    title: 'BankOps Monitoring',
    category: 'backend',
    tagline: {
      en: 'High-reliability banking application observability with Prometheus, Grafana, and FastAPI',
      pt: 'Observabilidade de alta disponibilidade para operações bancárias com Prometheus, Grafana e FastAPI',
    },
    description: {
      en: 'A production-minded banking infrastructure monitoring suite built with Python, FastAPI, and PostgreSQL. Demonstrates containerized microservice observability, transaction latency tracking, and metric visualization in Prometheus and Grafana dashboards.',
      pt: 'Plataforma de monitorização de infraestruturas bancárias desenvolvida com Python, FastAPI e PostgreSQL. Demonstra observabilidade em microsserviços conteinerizados com métricas no Prometheus e painéis no Grafana.',
    },
    longDescription: {
      en: 'BankOps Monitor simulates mission-critical banking operations (transaction routing, auth checks, ledger entries) and exposes custom telemetry endpoints. Instrumented with Prometheus metric collectors and visual Grafana dashboards, the system allows operators to monitor microservice health, latency percentiles, error rates, and database connection pools in real time.',
      pt: 'O BankOps Monitor simula operações bancárias críticas (fluxos de transações, autenticação, lançamentos) e disponibiliza telemetria personalizada. Equipado com coletores Prometheus e painéis Grafana, permite monitorizar a saúde dos microsserviços, latência e taxas de erro em tempo real.',
    },
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Prometheus', 'Grafana', 'Data Analytics'],
    githubUrl: 'https://github.com/radQueen258/BankOps_Monitor',
    image: bankopsImg,
    featured: true,
    year: '2026',
    architectureHighlights: {
      en: [
        'Asynchronous Python backend with FastAPI and Pydantic validation schemas',
        'Instrumented metrics pipeline with Prometheus custom counters, histograms, and gauges',
        'Multi-container Docker Compose environment orchestrating FastAPI, PostgreSQL, Prometheus & Grafana',
        'Real-time anomaly alerting mechanisms and simulated load-test traffic patterns',
      ],
      pt: [
        'Backend assíncrono em Python com esquemas de validação robustos via Pydantic e FastAPI',
        'Pipeline de métricas instrumentado com contadores, histogramas e medidores Prometheus',
        'Ambiente orquestrado com Docker Compose integrando FastAPI, PostgreSQL, Prometheus e Grafana',
        'Alertas de anomalia em tempo real e simulação de cargas de tráfego financeiro',
      ],
    },
  },
  {
    id: 'zamani-cuisine',
    title: 'Zamani African Heritage Kitchen',
    category: 'web',
    tagline: {
      en: 'Contemporary culinary web experience celebrating African gastronomy, built by the AUMA team',
      pt: 'Experiência web gastronómica contemporânea que celebra a culinária africana, criada pela equipa AUMA',
    },
    description: {
      en: 'A modern, responsive culinary platform crafted for Zamani African Heritage Kitchen. Showcases editorial gastronomy presentations, interactive menus, table reservation flows, and elegant mobile-first design.',
      pt: 'Website moderno e altamente responsivo desenvolvido para o restaurante Zamani African Heritage Kitchen. Apresenta fotografia editorial, menus interativos, fluxo de reservas e experiência mobile fluida.',
    },
    longDescription: {
      en: 'Engineered as part of my venture work with the AUMA digital team in 2026, this project blends African cultural heritage with high-end digital design and user-centred UI/UX principles. It features an intuitive menu filtering experience, smooth responsive transitions, interactive reservation booking inputs, and optimized asset loading.',
      pt: 'Desenvolvido no âmbito do estúdio AUMA em 2026, este projeto conjuga a herança culinária africana com design digital de topo e princípios de UI/UX centrados no utilizador. Possui filtragem dinâmica de cardápio, transições suaves e carregamento veloz.',
    },
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'UI/UX Design', 'AUMA Studio'],
    githubUrl: 'https://github.com/radQueen258/zamani-african-heritage-cuisine',
    image: zamaniImg,
    featured: true,
    year: '2026',
    architectureHighlights: {
      en: [
        'Semantic HTML5 structure with accessible navigation and ARIA landmarks',
        'Fluid CSS grid layouts that adapt gracefully from compact smartphones to 4K displays',
        'Client-side reservation form validation and interactive menu categorization',
        'Optimized typography and high-contrast color scheme for premium visual identity',
      ],
      pt: [
        'Estrutura HTML5 semântica com acessibilidade comprovada e marcos ARIA',
        'Layouts em CSS Grid flexíveis que se adaptam perfeitamente de ecrãs móveis a monitores 4K',
        'Validação no cliente de reservas e categorização interativa do menu',
        'Tipografia apurada e contraste elegante para uma identidade visual de prestígio',
      ],
    },
  },
  {
    id: 'scriptnest',
    title: 'ScriptNest',
    category: 'backend',
    tagline: {
      en: 'Lightweight, concurrent web development platform engineered with Go (Golang)',
      pt: 'Plataforma web leve e concorrente desenvolvida em Go (Golang)',
    },
    description: {
      en: 'A high-performance web development project utilizing Go (Golang). Focuses on concurrent request handling, clean standard-library routing, structured logging, and minimal memory footprint.',
      pt: 'Projeto de desenvolvimento web de alto desempenho em Go (Golang). Focado em processamento concorrente de requisições, roteamento limpo, registo estruturado de logs e consumo mínimo de memória.',
    },
    longDescription: {
      en: 'ScriptNest explores Go’s strengths in building lightweight backend architectures. It implements idiomatic Go practices, goroutine concurrency patterns, robust error handling, and clean modular code separation to demonstrate efficient web service development.',
      pt: 'O ScriptNest explora a eficiência da linguagem Go em arquiteturas backend leves. Aplica padrões idiomáticos, concorrência com goroutines, gestão rigorosa de erros e separação modular de responsabilidades.',
    },
    technologies: ['Go (Golang)', 'HTTP Server', 'REST APIs', 'Concurrency', 'Git'],
    githubUrl: 'https://github.com/radQueen258/SciptNest',
    image: '',
    featured: false,
    year: '2025',
    architectureHighlights: {
      en: [
        'Native Go net/http architecture with custom middleware chaining',
        'Idiomatic package structure and dependency-free core logic',
        'Concurrent worker patterns leveraging Go channels and goroutines',
        'Lightweight binary compilation suitable for rapid micro-deployments',
      ],
      pt: [
        'Arquitetura nativa em Go net/http com encadeamento de middlewares personalizados',
        'Estrutura de pacotes idiomática e lógica central sem dependências excessivas',
        'Padrões de trabalhadores concorrentes através de canais e goroutines',
        'Compilação de binários leves ideal para deploys rápidos e eficientes',
      ],
    },
  },
  {
    id: 'blog-api',
    title: 'BlogAPI',
    category: 'backend',
    tagline: {
      en: 'Idiomatic Go REST API with relational persistence and clean repository architecture',
      pt: 'API REST idiomática em Go com persistência relacional e arquitetura limpa de repositório',
    },
    description: {
      en: 'A structured Go-based backend API implementing secure CRUD operations, relational database models, parameterized queries, and standardized JSON error envelopes.',
      pt: 'API backend estruturada em Go com operações CRUD completas, modelagem relacional de dados, consultas parametrizadas e envelopes de erro padronizados em JSON.',
    },
    longDescription: {
      en: 'BlogAPI showcases backend craftsmanship in Go. It incorporates the Repository pattern to cleanly decouple database operations from HTTP handlers, enforces input sanitization, and structures RESTful endpoints for articles, authors, and categories with predictable status codes.',
      pt: 'A BlogAPI demonstra boas práticas de desenvolvimento backend com Go. Emprega o padrão Repository para desacoplar consultas à base de dados dos controladores HTTP, garantindo integridade de dados e respostas consistentes.',
    },
    technologies: ['Go (Golang)', 'SQL', 'RESTful API', 'JSON Protocols', 'Repository Pattern'],
    githubUrl: 'https://github.com/radQueen258/BlogAPI-COPY',
    image: '',
    featured: false,
    year: '2025',
    architectureHighlights: {
      en: [
        'Repository Pattern decoupling data access from business domain logic',
        'Parameterized SQL queries guarding against injection vulnerabilities',
        'Consistent HTTP response envelopes with RFC-compliant error schemas',
        'Structured configuration management and environment parsing',
      ],
      pt: [
        'Padrão Repository desacoplando o acesso a dados da lógica de negócio',
        'Consultas SQL parametrizadas protegidas contra injeções de código',
        'Envelopes consistentes de resposta HTTP com tratamento uniforme de exceções',
        'Gestão estruturada de configurações e variáveis de ambiente',
      ],
    },
  },
];

export const TECH_SKILLS: TechSkill[] = [
  // Data Analytics & Business Intelligence
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'analytics',
    level: 'Core Analytics',
    description: {
      en: 'Interactive executive dashboard development, data modeling, DAX measure calculation, KPI reporting, and business intelligence.',
      pt: 'Desenvolvimento de dashboards executivos interativos, modelagem de dados, fórmulas DAX, relatórios de KPIs e BI.',
    },
    projectRef: 'Executive & Operational Dashboards',
    iconName: 'LineChart',
  },
  {
    id: 'sql-analytics',
    name: 'SQL & Relational Analytics',
    category: 'analytics',
    level: 'Core Strength',
    description: {
      en: 'Complex aggregations, window functions, CTEs, schema normalization, analytical query optimization, and data extraction.',
      pt: 'Agregações complexas, funções analíticas de janela, CTEs, normalização de esquemas e otimização de consultas.',
    },
    projectRef: 'BankOps & Online Tutor Databases',
    iconName: 'Database',
  },
  {
    id: 'data-vis',
    name: 'Data Visualisation & Storytelling',
    category: 'analytics',
    level: 'Advanced',
    description: {
      en: 'Translating raw numerical records into clear, actionable visual summaries, trend insights, and stakeholder presentations.',
      pt: 'Tradução de dados numéricos em resumos visuais claros, tendências estratégicas e relatórios executivos.',
    },
    projectRef: 'Prometheus & Grafana Telemetry',
    iconName: 'PieChart',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design & Prototyping',
    category: 'specialties',
    level: 'Certified Specialty',
    description: {
      en: 'User-centred design (UCD), wireframing, high-fidelity mockups, design systems, and responsive design execution.',
      pt: 'Design centrado no utilizador (UCD), wireframing, protótipos de alta fidelidade, design systems e interfaces responsivas.',
    },
    projectRef: 'Certified UI/UX Designer · Zamani Platform',
    iconName: 'Figma',
  },
  {
    id: 'digital-consulting',
    name: 'Digital Consulting & Advisory',
    category: 'specialties',
    level: 'Certified Specialty',
    description: {
      en: 'Technology advisory, digital transformation strategies, product roadmapping, and business-to-engineering translation.',
      pt: 'Consultoria tecnológica, estratégias de transformação digital, roadmaps de produto e alinhamento de negócio.',
    },
    projectRef: 'Certified Digital Consultant · AUMA Studio',
    iconName: 'Compass',
  },

  // Languages
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    level: 'Core Strength',
    description: {
      en: 'Object-oriented software engineering, multithreading, enterprise backend systems, and university capstone foundation.',
      pt: 'Engenharia orientada a objetos, concorrência, sistemas empresariais e base do projeto final de curso.',
    },
    projectRef: 'AI-Powered Online Tutor',
    iconName: 'Coffee',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Core Strength',
    description: {
      en: 'FastAPI development, automated testing, system observability telemetry, data analysis, and AI prototyping.',
      pt: 'Desenvolvimento em FastAPI, testes automatizados, telemetria de observabilidade e prototipagem com IA.',
    },
    projectRef: 'BankOps Monitoring',
    iconName: 'Terminal',
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'languages',
    level: 'Proficient',
    description: {
      en: 'Concurrent microservices, clean RESTful APIs, minimal memory footprint, and idiomatic standard-library servers.',
      pt: 'Microsserviços concorrentes, APIs RESTful, baixo consumo de memória e servidores idiomáticos.',
    },
    projectRef: 'ScriptNest & BlogAPI',
    iconName: 'Cpu',
  },
  {
    id: 'javascript-ts',
    name: 'JavaScript / TypeScript',
    category: 'languages',
    level: 'Advanced',
    description: {
      en: 'Type-safe frontend development, modern ESNext, component architectures, and responsive interactive web platforms.',
      pt: 'Desenvolvimento frontend com tipagem estática, arquitetura de componentes e interfaces interativas.',
    },
    projectRef: 'Zamani Cuisine & AUMA Portals',
    iconName: 'Code2',
  },

  // Backend
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'backend',
    level: 'Core Strength',
    description: {
      en: 'Dependency injection, Spring Data JPA, Spring Security, REST controllers, and production-grade microservice architecture.',
      pt: 'Injeção de dependências, Spring Data JPA, segurança, controladores REST e arquiteturas escaláveis.',
    },
    projectRef: 'AI-Powered Online Tutor',
    iconName: 'Layers',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    level: 'Advanced',
    description: {
      en: 'Asynchronous Python web framework, OpenAPI schema generation, Pydantic type validation, and high-concurrency throughput.',
      pt: 'Framework assíncrono em Python, documentação OpenAPI automática, validação Pydantic e alta performance.',
    },
    projectRef: 'BankOps Monitoring',
    iconName: 'Zap',
  },
  {
    id: 'rest-apis',
    name: 'RESTful API Architecture',
    category: 'backend',
    level: 'Advanced',
    description: {
      en: 'Designing scalable resource URI schemas, stateless authentication, pagination, rate limiting, and HTTP semantic status handling.',
      pt: 'Conceção de APIs escaláveis, autenticação sem estado, paginação, controlo de tráfego e semântica HTTP.',
    },
    projectRef: 'All Backend Projects',
    iconName: 'Network',
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'databases',
    level: 'Core Strength',
    description: {
      en: 'ACID compliance, relational schema design, connection pooling, complex indexes, and analytical query planning.',
      pt: 'Conformidade ACID, modelagem relacional, gestão de conexões e execução eficiente de consultas.',
    },
    projectRef: 'BankOps & Online Tutor',
    iconName: 'Server',
  },

  // Tools & DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    level: 'Proficient',
    description: {
      en: 'Multi-stage container builds, Docker Compose orchestration for multi-service banking stacks, and isolated test environments.',
      pt: 'Construção otimizada de imagens, orquestração com Docker Compose e ambientes isolados de teste.',
    },
    projectRef: 'BankOps Monitoring',
    iconName: 'Boxes',
  },
  {
    id: 'prometheus-grafana',
    name: 'Prometheus & Grafana',
    category: 'tools',
    level: 'Proficient',
    description: {
      en: 'Application metric scraping, PromQL query authoring, custom telemetry dashboards, and infrastructure health monitoring.',
      pt: 'Coleta de métricas em tempo real, consultas PromQL, dashboards operacionais e monitorização de integridade.',
    },
    projectRef: 'BankOps Monitoring',
    iconName: 'Activity',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Advanced',
    description: {
      en: 'Branch management, pull request reviews, semantic versioning, and continuous integration workflows.',
      pt: 'Gestão de ramificações, revisão de código, versionamento semântico e fluxos de trabalho colaborativos.',
    },
    iconName: 'GitBranch',
  },

  // Emerging / Specialties
  {
    id: 'llm-integration',
    name: 'Applied LLMs & AI',
    category: 'specialties',
    level: 'Advanced Specialty',
    description: {
      en: 'Integrating language models into user-facing software, domain-specific prompt engineering, context orchestration, and educational AI.',
      pt: 'Integração prática de modelos de linguagem, engenharia de prompts pedagógicos e orquestração de contexto.',
    },
    projectRef: 'AI-Powered Online Tutor',
    iconName: 'Sparkles',
  },
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm-auma',
    year: '2026',
    period: 'Founded 2026',
    type: 'venture',
    title: {
      en: 'Founder & Lead Technologist',
      pt: 'Fundadora e Líder Tecnológica',
    },
    organization: 'AUMA Digital Venture',
    location: 'Maputo, Mozambique',
    description: {
      en: 'Founded AUMA in 2026 to deliver elevated digital solutions, custom web applications, data-driven systems, and transformative technology ventures for African enterprises and visionary initiatives.',
      pt: 'Fundação da AUMA em 2026 para desenvolver produtos digitais sob medida, soluções web, sistemas analíticos e iniciativas tecnológicas transformadoras.',
    },
    highlights: {
      en: [
        'Directing digital platform development, data analysis, and technological strategy for clients',
        'Spearheading the Zamani African Heritage Kitchen web experience and brand platform',
        'Providing certified digital consulting and UI/UX advisory for modern business ventures',
      ],
      pt: [
        'Direção técnica de projetos, análise de dados e consultoria digital estratégica',
        'Liderança do desenvolvimento da experiência web Zamani African Heritage Kitchen',
        'Prestação de consultoria digital certificada e design UI/UX para novos empreendimentos',
      ],
    },
  },
  {
    id: 'm-tutor',
    year: '2026',
    period: 'Capstone Project',
    type: 'project',
    title: {
      en: 'Engineering the AI-Powered Online Tutor',
      pt: 'Engenharia do Tutor Online com IA',
    },
    organization: 'Kazan Federal University Capstone',
    location: 'Russia & Mozambique',
    description: {
      en: 'Conceived, architected, and built an end-to-end learning platform with Java and Spring Boot that utilizes LLMs to prepare Mozambican high school students for national examinations as my 2026 graduation capstone.',
      pt: 'Concepção e implementação completa de plataforma de aprendizagem com Java e Spring Boot, utilizando LLMs para preparar alunos moçambicanos para os exames nacionais no encerramento da licenciatura em 2026.',
    },
    highlights: {
      en: [
        'Implemented Spring Boot REST micro-architecture with PostgreSQL database',
        'Integrated generative AI for automated Socratic feedback and question explanation',
        'Achieved outstanding academic defense evaluation for societal relevance',
      ],
      pt: [
        'Implementação de micro-arquitetura REST em Spring Boot com PostgreSQL',
        'Integração de IA generativa para explicações pedagógicas passo a passo',
        'Avaliação excelente na defesa do projeto final pela relevância social',
      ],
    },
  },
  {
    id: 'm-bankops',
    year: '2026',
    period: 'Infrastructure & Data',
    type: 'engineering',
    title: {
      en: 'BankOps Telemetry, Data & Monitoring Architecture',
      pt: 'Arquitetura de Telemetria, Dados e Monitorização BankOps',
    },
    organization: 'Independent Engineering Initiative',
    location: 'Maputo, Mozambique',
    description: {
      en: 'Engineered a full-lifecycle banking application telemetry prototype using Python FastAPI, Docker Compose, Prometheus instrumentation, and Grafana visualizations.',
      pt: 'Desenvolvimento de protótipo de observabilidade bancária usando Python FastAPI, Docker Compose, instrumentação Prometheus e painéis Grafana.',
    },
    highlights: {
      en: [
        'Defined actionable SLOs, latency percentiles, and transaction rate counters',
        'Configured real-time Grafana dashboards mapping service degradation scenarios',
        'Published open-source codebase for distributed systems learning',
      ],
      pt: [
        'Definição de SLOs, percentis de latência e contadores de requisições financeiras',
        'Configuração de painéis em tempo real no Grafana simulando degradação de serviços',
        'Disponibilização do código aberto para estudo de sistemas distribuídos',
      ],
    },
  },
  {
    id: 'm-certs',
    year: '2026',
    period: 'Professional Certifications',
    type: 'engineering',
    title: {
      en: 'Certified Digital Consultant & UI/UX Designer',
      pt: 'Certificações em Consultoria Digital e Design UI/UX',
    },
    organization: 'Professional Certification Boards',
    location: 'International Credentialing',
    description: {
      en: 'Earned professional credentials in Digital Consulting and UI/UX Design, cementing expertise in strategic technology advisory and empathetic, human-centred digital interface design.',
      pt: 'Obtenção de certificações profissionais em Consultoria Digital e Design UI/UX, consolidando competências em estratégia tecnológica e design centrado no utilizador.',
    },
    highlights: {
      en: [
        'Mastered user-centred design (UCD), qualitative usability testing, and wireframe prototyping',
        'Formulated enterprise digital transformation roadmaps and strategic tech advisory workflows',
        'Directly synthesized design and advisory skills into AUMA client deliveries',
      ],
      pt: [
        'Domínio de design centrado no utilizador (UCD), testes de usabilidade e prototipagem',
        'Elaboração de planos estratégicos de transformação digital e aconselhamento técnico',
        'Aplicação direta de consultoria e design nas entregas do estúdio AUMA',
      ],
    },
  },
  {
    id: 'm-degree',
    year: '2022–2026',
    period: 'Bachelor Degree',
    type: 'education',
    title: {
      en: "Bachelor's Degree in Software Engineering",
      pt: 'Licenciatura em Engenharia de Software',
    },
    organization: 'Kazan Federal University',
    location: 'Kazan, Russia',
    description: {
      en: 'Completed full-time 4-year rigorous software engineering curriculum (2022–2026) in Russia. Deep focus on algorithms, data structures, object-oriented design, distributed networks, databases, and software lifecycle methodologies.',
      pt: 'Formação superior integral de 4 anos (2022–2026) com alto rigor acadêmico na Rússia. Foco aprofundado em algoritmos, estruturas de dados, orientação a objetos, redes distribuídas e ciclo de vida de software.',
    },
    highlights: {
      en: [
        'Coursework: Advanced Algorithms, Software Architecture, Distributed Systems, Relational DBMS',
        'Built full-stack and analytical projects in Java, Go, Python, SQL, and modern web standards',
        'Graduated in 2026 with international engineering commendation',
      ],
      pt: [
        'Disciplinas chave: Algoritmos Avançados, Arquitetura de Software, Sistemas Distribuídos, Bases de Dados',
        'Desenvolvimento de projetos práticos em Java, Go, Python, SQL e tecnologias web',
        'Conclusão da licenciatura em 2026 com distinção em ambiente acadêmico internacional',
      ],
    },
  },
];
