import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(path.resolve(process.cwd(), 'package.json'));
const { chromium } = require('@playwright/test');

const ASSETS_DIR = path.resolve(process.cwd(), 'src/assets');

const EXACT_ORIGINAL_STYLES = `
  @page {
    size: A4;
    margin: 21px 0 21px 0;
  }
  @page :first {
    margin-top: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    font-family: Arial, Helvetica, 'Liberation Sans', sans-serif;
    color: #222222;
    background: #ffffff;
    font-size: 9pt;
    line-height: 1.3;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .header {
    background-color: #163050;
    color: #ffffff;
    padding: 20px 36px 16px 36px;
    border-bottom: 3.5px solid #2b6cb0;
    margin-bottom: 10px;
  }
  .header__name {
    font-size: 22pt;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3px;
    letter-spacing: -0.2px;
  }
  .header__subtitle {
    font-size: 10.6pt;
    color: #bfd4ea;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .header__contact {
    font-size: 8.6pt;
    color: #d1e2f3;
    margin-bottom: 2px;
  }
  .header__links {
    font-size: 8.6pt;
    color: #9ec5eb;
  }
  .header__sep {
    margin: 0 5px;
    color: #7b9ebd;
  }
  .container {
    padding: 0 36px;
  }
  .section {
    margin-bottom: 8px;
  }
  .section-title {
    font-size: 9.5pt;
    font-weight: 700;
    text-transform: uppercase;
    color: #16697a;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 2px;
    margin-bottom: 5px;
    letter-spacing: 0.3px;
  }
  .summary {
    font-size: 9pt;
    color: #222222;
    line-height: 1.32;
  }
  /* Destaques / Key Achievements Table */
  .ach-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f4f7f9;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }
  .ach-table tr {
    border-bottom: 1px solid #e2e8f0;
  }
  .ach-table tr:last-child {
    border-bottom: none;
  }
  .ach-table td {
    padding: 4.5px 9px;
    vertical-align: top;
    font-size: 8.85pt;
    line-height: 1.29;
  }
  .ach-table td.ach-label {
    width: 27%;
    font-weight: 700;
    color: #1a202c;
  }
  /* Technical Skills Table */
  .skills-table {
    width: 100%;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1.4px 0;
    vertical-align: top;
    font-size: 8.8pt;
    line-height: 1.29;
  }
  .skills-table td.sk-label {
    width: 23%;
    font-weight: 700;
    color: #1a202c;
    padding-right: 8px;
  }
  /* Experience & Projects */
  .entry {
    margin-bottom: 5.5px;
    page-break-inside: avoid;
  }
  .entry:last-child {
    margin-bottom: 0;
  }
  .entry-title {
    font-size: 9.15pt;
    font-weight: 700;
    color: #111827;
  }
  .entry-title a {
    color: #16697a;
    font-weight: 700;
  }
  .entry-meta {
    font-size: 8.4pt;
    color: #555555;
    font-style: italic;
    margin-bottom: 1.5px;
  }
  .bullets {
    list-style: none;
    padding-left: 8px;
  }
  .bullets li {
    position: relative;
    padding-left: 9px;
    margin-bottom: 1.2px;
    font-size: 8.8pt;
    line-height: 1.29;
    color: #222222;
  }
  .bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #222222;
  }
  /* Education */
  .edu-item {
    margin-bottom: 3px;
    page-break-inside: avoid;
  }
  .edu-title {
    font-size: 8.95pt;
    font-weight: 700;
    color: #111827;
  }
  .edu-meta {
    font-size: 8.4pt;
    color: #555555;
  }
  /* Certifications */
  .cert-list {
    list-style: none;
    padding-left: 2px;
  }
  .cert-list li {
    font-size: 8.75pt;
    margin-bottom: 1.2px;
    color: #222222;
  }
  .cert-list li::before {
    content: "› ";
    color: #16697a;
    font-weight: 700;
  }
  .languages {
    font-size: 8.95pt;
    color: #222222;
    padding-top: 1px;
  }
`;

// ============================================================================
// 1. FRONTEND CV — PORTUGUESE
// ============================================================================
const FRONTEND_PT = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Desenvolvedor Front-End</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Desenvolvedor Front-End &amp; Mobile | TypeScript | React | Angular | React Native</div>
    <div class="header__contact">
      Nova Friburgo, RJ <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">RESUMO PROFISSIONAL</h2>
      <p class="summary">
        Engenheiro de Software com foco em <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong> e <strong>React Native (Expo)</strong>, com sólida base em integração de <strong>APIs REST</strong>, <strong>Design Systems</strong>, animações avançadas e acessibilidade (WCAG). Desenvolvo interfaces web e mobile performáticas, responsivas e cobertas por testes automatizados (Vitest, Playwright e Cypress). Mais de 910 h de formação prática em software pelo Serratec e UECE. Pós-graduado em Engenharia de Software. Inglês Avançado (B2+), com programa C1/C2 concluído pela Wizard. Disponível para atuação remota nacional e internacional.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">App em Produção<br>(Angular 22 &amp; WebGL)</td>
          <td>Portfólio pessoal desenvolvido em Angular 22 e TypeScript, com Signals nativos e sistema de partículas WebGL acelerado por GPU, coberto por 195 testes automatizados (Vitest, Playwright + Axe-Core e Cypress) e auditoria Lighthouse 100/100/100/100 no desktop.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP construído com um time de 11 pessoas para a Zeiss, desenvolvendo a interface em React e TypeScript para validação clínica de receitas via OCR + recomendação de lentes via IA e dashboards de vendas em tempo real.</td>
        </tr>
        <tr>
          <td class="ach-label">Instrutor de<br>Programação</td>
          <td>Lecionei Programação (JavaScript, lógica, integração de APIs e bancos de dados) para uma turma de 10 alunos no SENAI/FAETEC, elaborando todo o material didático a partir da ementa da instituição.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Linguagens</td>
          <td>TypeScript | JavaScript (ES6+) | HTML5 | CSS3 / SCSS | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend Web</td>
          <td>React | Angular 22 (Signals, Standalone, OnPush, SSR, PWA) | Three.js / WebGL | Framer Motion | Styled Components | CSS Modules | Vite</td>
        </tr>
        <tr>
          <td class="sk-label">Mobile &amp; UI/UX</td>
          <td>React Native (Expo SDK 54) | React Navigation (Drawer, Stack, Tabs) | React Hook Form | Zod | Design Systems | Responsividade &amp; Acessibilidade (WCAG 2.1 AA/AAA)</td>
        </tr>
        <tr>
          <td class="sk-label">Testes Front-End</td>
          <td>Vitest | Playwright | Cypress | Axe-Core (Testes de Acessibilidade) | Testes Unitários e E2E</td>
        </tr>
        <tr>
          <td class="sk-label">Integração &amp; Backend</td>
          <td>Consumo de APIs REST | Axios | JWT &amp; RBAC | Integração com IA (Google Gemini AI / n8n / OCR) | Java (Spring Boot) | C# (.NET) | PostgreSQL</td>
        </tr>
        <tr>
          <td class="sk-label">Ferramentas</td>
          <td>Git | GitHub | GitHub Actions | Vercel (CI/CD) | Docker | Figma | Swagger / OpenAPI</td>
        </tr>
        <tr>
          <td class="sk-label">Metodologias</td>
          <td>Agile / Scrum | Componentização Modular | Mobile-First | Clean Architecture</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação — SENAI / FAETEC</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos cobrindo lógica de programação com <strong>JavaScript</strong>, integração com bancos de dados relacionais (PostgreSQL) e construção de APIs RESTful com <strong>Spring Boot</strong>, encerrando com projeto integrador.</li>
          <li>Elaborei todo o material didático (PDFs de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, além de tirar dúvidas individuais dos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Front-End &amp; Full-Stack (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí residência imersiva de 790 h com forte atuação em <strong>Frontend Web (React, TypeScript, HTML5/CSS3/JS)</strong> e <strong>Mobile (React Native com Expo)</strong> integrados a APIs RESTful (Spring Boot), encerrando com projeto final entregue como MVP corporativo sob contrato em parceria com a <strong>Zeiss</strong>.</li>
          <li>Desenvolvi interfaces responsivas, componentizadas e acessíveis ao final de cada disciplina, aplicando validação de esquemas (Zod), gerenciamento de estado e consumo assíncrono de APIs.</li>
          <li>Atuei em equipe Ágil com Git, revisões de código (Code Review) e sprints, aplicando padrões de Clean Code e tipagem estrita em TypeScript em todos os entregáveis.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo cumprimento dos cronogramas de atendimento.</li>
          <li>Realizei suporte operacional Nível 1, atuando na resolução de conflitos de agenda e comunicação direta com clientes.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - Assistente de Recomendações</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4 - MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web com <strong>front-end em React e TypeScript</strong> (integrado a back-end Spring Boot 4 e pipeline de IA n8n/RAG) que exibe uma interface de validação clínica assistida dos dados extraídos via OCR e cruza as métricas ópticas com o perfil do paciente para recomendar a lente Zeiss ideal.</li>
          <li>Desenvolvimento de <strong>dashboards analíticos em tempo real</strong> para gerentes e para a matriz da Zeiss (lentes mais vendidas, mais recomendadas, taxa de conversão e ranking de vendedores). Controle de rotas e visibilidade na UI baseado em autenticação JWT em três níveis (admin Zeiss, gerente e funcionário), com telas de CRUD completo para lojas, produtos e funcionários.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular 22</strong>, <strong>Signals nativos (signal/computed)</strong> e detecção de mudanças <code>OnPush</code> em todos os componentes, incluindo um sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, e configurado como PWA offline-ready com service worker.</li>
          <li>Coberto por <strong>195 testes automatizados</strong> em três camadas (140 unitários Vitest, 38 E2E Playwright com auditoria de acessibilidade WCAG 2.1 AA/AAA via Axe-Core, 17 E2E Cypress), com suporte trilíngue i18n (PT/EN/ES) e auditoria Google Lighthouse 100/100/100/100 no desktop em Performance, Acessibilidade, Boas Práticas e SEO.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Aurora - Plataforma de Evolução Pessoal - <a href="https://github.com/DevYuriVieira/aurora-growth-platform">github.com/DevYuriVieira/aurora-growth-platform</a></div>
        <div class="entry-meta">Colaborativo (6 devs) | 2026 | React Native | Expo SDK 54 | TypeScript | React Navigation | Zod | AsyncStorage | Projeto Final - Aplicações Multiplataformas</div>
        <ul class="bullets">
          <li>Aplicativo mobile em <strong>React Native (Expo SDK 54) e TypeScript</strong> para acompanhamento de metas pessoais, gamificação com cálculo dinâmico de XP/níveis, mentorias e comunidade, com sessão persistida (AsyncStorage), rotas protegidas via Context API (<code>AuthContext</code>) e módulo de metas com CRUD completo.</li>
          <li>Combina três padrões de navegação híbrida em um só app (Drawer, Stack e Tabs), formulários validados defensivamente com <strong>React Hook Form + Zod</strong>, e recursos nativos do dispositivo como câmera, galeria, mapas/geolocalização via Expo Location, armazenamento criptografado com <strong>Expo Secure Store</strong> e check-in de eventos por leitura nativa de <strong>QR Code</strong>.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | React 18 | TypeScript 5 | Vite 5 | Framer Motion 11 | CSS Modules | Intersection Observer | Vercel CI/CD</div>
        <ul class="bullets">
          <li>Aplicação web interativa em produção na Vercel que apresenta 30 anos de evolução de hardware dos consoles PlayStation, construída com arquitetura modular de componentes em <strong>React e TypeScript</strong> com tipagem estrita das fichas técnicas históricas.</li>
          <li>Implementa motion design avançado e interpolação de animações declarativas a <strong>60 FPS com Framer Motion</strong> sem provocar reflows indesejados no DOM, layout 100% responsivo para dispositivos móveis e desktops, e esteira de deploy contínuo (CI/CD) automatizada via GitHub e Vercel.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Anime Weather Platform - <a href="https://github.com/DevYuriVieira/anime-weather-platform">github.com/DevYuriVieira/anime-weather-platform</a></div>
        <div class="entry-meta">Colaborativo (Pair Programming) | 2026 | React 19 | TypeScript | Vite | Google Gemini AI | Open-Meteo API | Jikan v4 API | Context API</div>
        <ul class="bullets">
          <li>Aplicação web reativa desenvolvida em <strong>React, TypeScript e Vite</strong> que orquestra o consumo assíncrono em tempo real de múltiplas APIs REST externas — detectando o clima local em tempo real via <strong>Open-Meteo API</strong> e cruzando com o catálogo cultural da <strong>Jikan v4 API</strong>.</li>
          <li>Integra o SDK do <strong>Google Gemini AI</strong> aplicando Engenharia de Prompts para retornar tanto recomendações estruturadas em <strong>JSON estrito</strong> (renderizadas dinamicamente em cards com design <em>glassmorphism</em>) quanto diálogos interativos em um chatbot contextualizado com tratamento defensivo de estados de carregamento e fallbacks de erro.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES</h2>
      <ul class="cert-list">
        <li><strong>Desenvolvimento Front-End com Inteligência Artificial (80 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (TypeScript, Angular, Java)</strong> - DIO</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">IDIOMAS</h2>
      <div class="languages">
        <strong>Português</strong> Nativo &nbsp;|&nbsp; <strong>Inglês</strong> Avançado (B2+) &nbsp;|&nbsp; <strong>Espanhol</strong> Avançado (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

// ============================================================================
// 2. FRONTEND CV — ENGLISH
// ============================================================================
const FRONTEND_EN = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Front-End Software Engineer</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Front-End &amp; Mobile Software Engineer | TypeScript | React | Angular | React Native</div>
    <div class="header__contact">
      Nova Friburgo, Brazil <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
      <p class="summary">
        Software Engineer specializing in <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong> and <strong>React Native (Expo)</strong>, with hands-on experience in <strong>REST API integration</strong>, <strong>Design Systems</strong>, declarative motion design and web accessibility (WCAG). I build responsive, high-performance web and mobile interfaces backed by automated test suites (Vitest, Playwright and Cypress). Over 910 h of software development training at Serratec and UECE. Postgraduate in Software Engineering. Advanced English (B2+), with a C1/C2 programme completed at Wizard. Open to national and international remote roles.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Live Production App<br>(Angular 22 &amp; WebGL)</td>
          <td>Personal portfolio built with Angular 22 and TypeScript, native Signals and a GPU-accelerated WebGL particle system, covered by 195 automated tests (Vitest, Playwright + Axe-Core and Cypress) and a 100/100/100/100 Lighthouse audit on desktop.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>MVP built with an 11-person team for Zeiss, developing the React and TypeScript frontend for assisted OCR prescription validation, AI-driven lens recommendations and real-time sales dashboards.</td>
        </tr>
        <tr>
          <td class="ach-label">Programming Instructor</td>
          <td>Taught Programming (JavaScript logic, REST API integration and relational databases) to a class of 10 students at SENAI/FAETEC, creating all teaching material from the institution's syllabus.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Languages</td>
          <td>TypeScript | JavaScript (ES6+) | HTML5 | CSS3 / SCSS | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend Web</td>
          <td>React | Angular 22 (Signals, Standalone, OnPush, SSR, PWA) | Three.js / WebGL | Framer Motion | Styled Components | CSS Modules | Vite</td>
        </tr>
        <tr>
          <td class="sk-label">Mobile &amp; UI/UX</td>
          <td>React Native (Expo SDK 54) | React Navigation (Drawer, Stack, Tabs) | React Hook Form | Zod | Design Systems | Responsive Design &amp; Accessibility (WCAG 2.1 AA/AAA)</td>
        </tr>
        <tr>
          <td class="sk-label">Automated Testing</td>
          <td>Vitest | Playwright | Cypress | Axe-Core (WCAG Accessibility Audits) | Unit &amp; End-to-End (E2E) Testing</td>
        </tr>
        <tr>
          <td class="sk-label">API &amp; Backend Integration</td>
          <td>REST APIs | Axios | JWT &amp; RBAC | Generative AI Integration (Google Gemini AI / n8n / OCR) | Java (Spring Boot) | C# (.NET) | PostgreSQL</td>
        </tr>
        <tr>
          <td class="sk-label">Tools</td>
          <td>Git | GitHub | GitHub Actions | Vercel (CI/CD) | Docker | Figma | Swagger / OpenAPI</td>
        </tr>
        <tr>
          <td class="sk-label">Practices</td>
          <td>Agile / Scrum | Modular Componentization | Mobile-First | Clean Architecture</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Programming Instructor</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students covering programming logic with <strong>JavaScript</strong>, relational databases with DBeaver and PostgreSQL, OOP in Java and <strong>REST APIs with Spring Boot</strong>, closing with an integrative project.</li>
          <li>Created all teaching material (exercise PDFs, summaries, tutorials and support resources) from the institution's syllabus, plus one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Front-End &amp; Full-Stack Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petropolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a 790-hour immersive residency with strong focus on <strong>Web Frontend (React, TypeScript, HTML5/CSS3/JS)</strong> and <strong>Mobile (React Native with Expo)</strong> integrated with Spring Boot RESTful APIs, closing with a corporate MVP delivered under contract in partnership with <strong>Zeiss</strong>.</li>
          <li>Delivered practical projects at the end of each subject, building responsive interfaces, schema-validated forms (Zod), state management flows and asynchronous API integrations.</li>
          <li>Worked in an Agile team with Git, code reviews and sprints, applying clean-code standards and strict TypeScript typing across all deliverables.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4 - Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses by hand, making recommendations inconsistent. The team built a web platform with a <strong>React and TypeScript front end</strong> (connected to a Java 17/Spring Boot 4 back end and an n8n/RAG AI pipeline) featuring an assisted clinical validation UI for OCR-extracted prescriptions and matching optical parameters with patient lifestyle habits to recommend the ideal Zeiss lens.</li>
          <li>Built <strong>real-time analytics dashboards</strong> for store managers and Zeiss headquarters (best-selling and most recommended lenses, conversion rates and seller rankings). Role-based UI route protection backed by a three-tier JWT hierarchy (Zeiss admin, store manager, employee), with full CRUD views for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Live in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular 22</strong> standalone components, <strong>native Signals (signal/computed)</strong> and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as an offline-ready PWA with a service worker.</li>
          <li>Covered by <strong>195 automated tests</strong> across three layers (140 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core, 17 Cypress E2E specs), with trilingual i18n (PT/EN/ES) and a 100/100/100/100 Google Lighthouse audit on desktop across Performance, Accessibility, Best Practices and SEO.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Aurora - Personal Growth Platform - <a href="https://github.com/DevYuriVieira/aurora-growth-platform">github.com/DevYuriVieira/aurora-growth-platform</a></div>
        <div class="entry-meta">Collaborative (6 devs) | 2026 | React Native | Expo SDK 54 | TypeScript | React Navigation | Zod | AsyncStorage | Final Project - Multiplatform Applications</div>
        <ul class="bullets">
          <li>A <strong>React Native (Expo SDK 54) and TypeScript</strong> mobile app for tracking personal goals, XP/level gamification, mentorships and community activity, with session persistence (AsyncStorage), Context-API-protected routes (<code>AuthContext</code>), and a goals module with full CRUD.</li>
          <li>Combines three hybrid navigation patterns in one app (Drawer, Stack and Tabs), Zod-validated forms via <strong>React Hook Form + Zod</strong>, and native device features such as camera, gallery, maps/geolocation through Expo Location, encrypted storage via <strong>Expo Secure Store</strong>, plus a community feed and native <strong>QR-code</strong> event check-in.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | React 18 | TypeScript 5 | Vite 5 | Framer Motion 11 | CSS Modules | Intersection Observer | Vercel CI/CD</div>
        <ul class="bullets">
          <li>Live production web application showcasing 30 years of PlayStation console hardware evolution, engineered with reusable <strong>React and TypeScript</strong> components and strict typing for historical hardware specifications.</li>
          <li>Implements advanced motion design and declarative <strong>60 FPS animations using Framer Motion</strong> without triggering unwanted DOM reflows, a 100% responsive layout across mobile and desktop viewports, and an automated CI/CD pipeline via GitHub and Vercel.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Anime Weather Platform - <a href="https://github.com/DevYuriVieira/anime-weather-platform">github.com/DevYuriVieira/anime-weather-platform</a></div>
        <div class="entry-meta">Collaborative (Pair Programming) | 2026 | React 19 | TypeScript | Vite | Google Gemini AI | Open-Meteo API | Jikan v4 API | Context API</div>
        <ul class="bullets">
          <li>Reactive web application built with <strong>React, TypeScript and Vite</strong> that orchestrates real-time asynchronous data across multiple external REST APIs — detecting local weather in real time via the <strong>Open-Meteo API</strong> and cross-referencing anime catalogs from the <strong>Jikan v4 API</strong>.</li>
          <li>Integrates the <strong>Google Gemini AI SDK</strong> using Prompt Engineering to produce both <strong>strictly structured JSON</strong> recommendation cards (rendered in a responsive glassmorphism UI) and an interactive weather-pun chatbot with defensive loading states and error fallbacks.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree - Software Engineering</div>
        <div class="edu-meta">Estacio University | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceara (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree - Industrial Engineering</div>
        <div class="edu-meta">Estacio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS</h2>
      <ul class="cert-list">
        <li><strong>Front-End Development with Artificial Intelligence (80 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (TypeScript, Angular, Java)</strong> - DIO</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">LANGUAGES</h2>
      <div class="languages">
        <strong>Portuguese</strong> Native &nbsp;|&nbsp; <strong>English</strong> Advanced (B2+) &nbsp;|&nbsp; <strong>Spanish</strong> Advanced (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

// ============================================================================
// 3. BACKEND CV — PORTUGUESE
// ============================================================================
const BACKEND_PT = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Desenvolvedor Back-End</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Engenheiro de Software Back-End | Java | Spring Boot | .NET / C# | PostgreSQL</div>
    <div class="header__contact">
      Nova Friburgo, RJ <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">RESUMO PROFISSIONAL</h2>
      <p class="summary">
        Engenheiro de Software Back-End com foco em <strong>Java (Spring Boot)</strong> e <strong>.NET 10 (C# 14 / ASP.NET Core)</strong>, com sólida experiência prática em <strong>APIs RESTful</strong>, <strong>mensageria assíncrona (RabbitMQ)</strong>, <strong>PostgreSQL</strong> e <strong>Clean Architecture / DDD</strong>. Desenvolvo sistemas distribuídos seguros (JWT, Spring Security, Keycloak OIDC), resilientes e cobertos por testes automatizados (xUnit e JUnit 5). Mais de 910 h de formação prática em software pelo Serratec e UECE. Pós-graduado em Engenharia de Software. Inglês Avançado (B2+), com programa C1/C2 concluído pela Wizard. Disponível para atuação remota nacional e internacional.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">FleetOps API<br>(.NET 10 &amp; RabbitMQ)</td>
          <td>Arquitetura corporativa em C# 14 / .NET 10 com Clean Architecture, DDD, Transactional Outbox, RabbitMQ, Keycloak OIDC, PostgreSQL 18 (SKIP LOCKED / xmin), 300 testes automatizados em xUnit e throughput de 278 RPS ACID no k6.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP construído com um time de 11 pessoas para a Zeiss, integrando APIs REST em Java 17 / Spring Boot 4, PostgreSQL, controle de acesso JWT em 3 níveis e pipeline de OCR + IA (n8n/RAG).</td>
        </tr>
        <tr>
          <td class="ach-label">Instrutor Back-End<br>(Java &amp; Spring Boot)</td>
          <td>Lecionei Programação Back-End (Java, POO, PostgreSQL/DBeaver e APIs REST com Spring Boot) para uma turma de 10 alunos no SENAI/FAETEC, elaborando todo o material didático da instituição.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Linguagens</td>
          <td>Java 17+ | C# 14 (.NET 10) | SQL | TypeScript / JavaScript</td>
        </tr>
        <tr>
          <td class="sk-label">Frameworks Backend</td>
          <td>Spring Boot 3/4 | Spring Security 6 | ASP.NET Core (.NET 10) | JPA / Hibernate | Entity Framework Core 10 | JDBC Puro | Bean Validation</td>
        </tr>
        <tr>
          <td class="sk-label">Mensageria &amp; Segurança</td>
          <td>RabbitMQ (Publisher Confirms, Filas TTL Retry, DLX/DLQ) | Transactional Outbox Pattern | Consumidor Idempotente | Keycloak OIDC (RS256/JWKS) | JWT &amp; RBAC</td>
        </tr>
        <tr>
          <td class="sk-label">Banco de Dados</td>
          <td>PostgreSQL 16/18 (MVCC xmin, FOR UPDATE SKIP LOCKED, Modelagem 3FN, Views, Índices, Triggers) | MySQL | Otimização de Consultas (N+1)</td>
        </tr>
        <tr>
          <td class="sk-label">Testes &amp; Observabilidade</td>
          <td>xUnit (Unitários, Integração e Injeção de Falhas) | JUnit 5 | k6 (Testes de Carga) | OpenTelemetry &amp; Jaeger (Tracing Distribuído W3C)</td>
        </tr>
        <tr>
          <td class="sk-label">Ferramentas &amp; DevOps</td>
          <td>Docker &amp; Docker Compose | Git | GitHub Actions | DBeaver | Swagger / OpenAPI 3 | Maven | n8n | OCR &amp; RAG</td>
        </tr>
        <tr>
          <td class="sk-label">Arquitetura &amp; Métodos</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | SOLID | Arquitetura em Camadas (MVC + DAO / DTOs) | API-First | Agile / Scrum</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação Back-End (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos em Programação Back-End cobrindo lógica de programação, banco de dados relacional com <strong>DBeaver e PostgreSQL</strong>, <strong>POO em Java</strong> e desenvolvimento de <strong>APIs REST com Spring Boot</strong>, encerrando com projeto integrador.</li>
          <li>Elaborei todo o material didático (PDFs de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, além de tirar dúvidas individuais dos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack / Back-End (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí formação intensiva de 790 h em trilhas progressivas com forte foco em <strong>Banco de Dados PostgreSQL</strong>, <strong>POO em Java 17</strong> e <strong>APIs RESTful com Spring Boot e Spring Security</strong>, encerrando com projeto final entregue como MVP corporativo sob contrato em parceria com a <strong>Zeiss</strong>.</li>
          <li>Projetei e implementei arquiteturas em camadas (Controller, Service, Repository, DAO, DTOs), modelagem relacional 3FN, autenticação JWT/RBAC e integrações de serviços.</li>
          <li>Atuei em equipe Ágil com Git, revisões de código e sprints, aplicando POO, SOLID e boas práticas em todos os entregáveis.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo cumprimento dos cronogramas de atendimento.</li>
          <li>Realizei suporte operacional Nível 1, atuando na resolução de conflitos de agenda e comunicação direta com clientes.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - Assistente de Recomendações</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | Java 17 | Spring Boot 4.1 | PostgreSQL 18 | JWT (RBAC) | n8n (OCR &amp; RAG) | Swagger/OpenAPI | Maven - Projeto Final Serratec · MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>Para eliminar a inconsistência na leitura manual de receitas oftalmológicas em óticas parceiras, foi construída uma plataforma corporativa com <strong>back-end em Java 17 e Spring Boot 4</strong> e persistência em <strong>PostgreSQL</strong>, integrada a um pipeline de <strong>OCR e IA (n8n/RAG)</strong> que processa parâmetros clínicos extraídos da receita e os cruza com os hábitos do paciente para recomendar a lente Zeiss adequada.</li>
          <li>Implementação de <strong>autenticação stateless JWT com controle de acesso baseado em papéis (RBAC) em três níveis</strong> (admin Zeiss, gerente e funcionário), delimitando estritamente o escopo de visibilidade de dados entre filiais, com endpoints de agregação analítica de desempenho comercial (conversão, ranking e produtos mais recomendados) e CRUD completo de lojas, catálogo de lentes e colaboradores.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Pessoal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Motor back-end distribuído e orientado a eventos em <strong>.NET 10 (C# 14)</strong> para gestão de frotas e logística (27 endpoints REST em 5 contextos delimitados DDD: Veículos, Motoristas, Entregas, Rotas e Manutenção), operando como Resource Server OAuth 2.0 / OIDC com <strong>Keycloak (validação assimétrica RS256/JWKS)</strong> e RBAC para quatro papéis.</li>
          <li>Implementa <strong>Transactional Outbox</strong> atômico no DbContext eliminando <em>dual-write hazard</em>, polling concorrente multi-réplica com <code>FOR UPDATE SKIP LOCKED</code>, concorrência otimista física via <code>xmin</code> do PostgreSQL, topologia <strong>RabbitMQ</strong> (Publisher Confirms, filas de retry com TTL 10s/30s/90s e Dead-Letter Queue), consumidor idempotente por <code>MessageId</code> e tracing distribuído W3C no Jaeger.</li>
          <li>Suíte de <strong>300 testes automatizados</strong> (166 unitários e 134 de integração/injeção de falhas) em xUnit com 100% de aprovação e capacidade transacional aferida de <strong>278 RPS sustentados</strong> em escritas ACID no PostgreSQL (k6).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Colaborativo (Residência Serratec) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>API RESTful de e-commerce construída em <strong>Java 17 e Spring Boot 3</strong> estruturada em camadas (Controller, Service, Repository e DTOs) para isolar as regras de negócio, gerenciar controle de estoque concorrente, validar pedidos e blindar as entidades de domínio contra exposição direta.</li>
          <li>Implementa filtros customizados na cadeia do <strong>Spring Security 6 para autenticação stateless via JWT</strong> e autorização granular baseada em perfis (RBAC), mapeamento objeto-relacional otimizado com <strong>JPA/Hibernate no PostgreSQL</strong> e contratos de API interativos documentados com Swagger UI / OpenAPI 3.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Sistema de Folha de Pagamento - <a href="https://github.com/DevYuriVieira/payroll-system-java">github.com/DevYuriVieira/payroll-system-java</a></div>
        <div class="entry-meta">Colaborativo (4 devs) | 2026 | Java 17 | PostgreSQL | JDBC | MVC | DAO | Projeto Final POO Serratec</div>
        <ul class="bullets">
          <li>Automatiza o processamento em lote e o cálculo de alíquotas progressivas de <strong>INSS e IRRF</strong> e deduções por dependentes conforme a legislação brasileira, lendo dados de funcionários via CSV e persistindo tudo com <strong>JDBC puro no PostgreSQL</strong> em uma arquitetura em camadas <strong>MVC + DAO</strong> construída sem ORM para reforçar os fundamentos de SQL e POO.</li>
          <li>Usa <code>BigDecimal (RoundingMode.HALF_UP)</code> para precisão monetária exata em todos os cálculos, padrão <strong>Singleton</strong> no gerenciador de conexões com o banco, exceções de domínio customizadas (<code>CpfInvalidoException</code>, <code>SalarioInvalidoException</code>) e exportação automatizada de relatórios CSV.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Dental Clinic Management System (DCMS) - <a href="https://github.com/DevYuriVieira/dentacare-management-system">github.com/DevYuriVieira/dentacare-management-system</a></div>
        <div class="entry-meta">Colaborativo (6 devs - Residência Serratec 2026.1) | 2026 | PostgreSQL 16+ | SQL Avançado (DDL, DML, DQL) | Modelagem 3FN | Database Indexing | SQL Views</div>
        <ul class="bullets">
          <li>Sistema de banco de dados relacional transacional projetado em <strong>PostgreSQL 16+</strong> e estritamente normalizado até a <strong>3ª Forma Normal (3FN)</strong> para centralizar agendamentos clínicos com máquina de estados (Agendada, Realizada, Cancelada), histórico associativo N:N de procedimentos (<code>consulta_procedimento</code>) e dentistas (CRO) sem redundância.</li>
          <li>Implementa regras de negócio via <strong>DDL</strong> (validação de CPF e CRO com expressões regulares <strong>Regex</strong>, restrições temporais e campos únicos), integridade referencial com <code>RESTRICT</code> e <code>CASCADE</code>, além de <strong>Índices relacionais</strong> estratégicos e <strong>Views analíticas em SQL</strong> para relatórios de faturamento e agendamentos.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES</h2>
      <ul class="cert-list">
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, SQL)</strong> - DIO</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">IDIOMAS</h2>
      <div class="languages">
        <strong>Português</strong> Nativo &nbsp;|&nbsp; <strong>Inglês</strong> Avançado (B2+) &nbsp;|&nbsp; <strong>Espanhol</strong> Avançado (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

// ============================================================================
// 4. BACKEND CV — ENGLISH
// ============================================================================
const BACKEND_EN = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Back-End Software Engineer</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Back-End Software Engineer | Java | Spring Boot | .NET / C# | PostgreSQL</div>
    <div class="header__contact">
      Nova Friburgo, Brazil <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
      <p class="summary">
        Back-End Software Engineer specializing in <strong>Java (Spring Boot)</strong> and <strong>.NET 10 (C# 14 / ASP.NET Core)</strong>, with hands-on experience in <strong>RESTful APIs</strong>, <strong>asynchronous messaging (RabbitMQ)</strong>, <strong>PostgreSQL</strong> and <strong>Clean Architecture / DDD</strong>. I build secure (JWT, Spring Security, Keycloak OIDC), resilient distributed backend services backed by automated test suites (xUnit and JUnit 5). Over 910 h of software development training at Serratec and UECE. Postgraduate in Software Engineering. Advanced English (B2+), with a C1/C2 programme completed at Wizard. Open to national and international remote roles.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">FleetOps API<br>(.NET 10 &amp; RabbitMQ)</td>
          <td>Corporate reference architecture in C# 14 / .NET 10 with Clean Architecture, DDD, Transactional Outbox, RabbitMQ, Keycloak OIDC, PostgreSQL 18 (SKIP LOCKED / xmin), 300 automated xUnit tests and 278 RPS ACID throughput on k6.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>MVP built with an 11-person team for Zeiss, integrating Java 17 / Spring Boot 4 REST APIs, PostgreSQL, three-tier JWT role-based access control and an OCR + AI pipeline (n8n/RAG).</td>
        </tr>
        <tr>
          <td class="ach-label">Back-End Instructor<br>(Java &amp; Spring Boot)</td>
          <td>Taught Back-End Programming (Java, OOP, PostgreSQL/DBeaver and REST APIs with Spring Boot) to a class of 10 students at SENAI/FAETEC, creating all teaching material from the institution's syllabus.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Languages</td>
          <td>Java 17+ | C# 14 (.NET 10) | SQL | TypeScript / JavaScript</td>
        </tr>
        <tr>
          <td class="sk-label">Backend Frameworks</td>
          <td>Spring Boot 3/4 | Spring Security 6 | ASP.NET Core (.NET 10) | JPA / Hibernate | Entity Framework Core 10 | Raw JDBC | Bean Validation</td>
        </tr>
        <tr>
          <td class="sk-label">Messaging &amp; Security</td>
          <td>RabbitMQ (Publisher Confirms, TTL Retry Queues, DLX/DLQ) | Transactional Outbox Pattern | Idempotent Consumer | Keycloak OIDC (RS256/JWKS) | JWT &amp; RBAC</td>
        </tr>
        <tr>
          <td class="sk-label">Databases</td>
          <td>PostgreSQL 16/18 (MVCC xmin, FOR UPDATE SKIP LOCKED, 3NF Modeling, Views, Indexes, Triggers) | MySQL | Query Optimisation (N+1 elimination)</td>
        </tr>
        <tr>
          <td class="sk-label">Testing &amp; Observability</td>
          <td>xUnit (Unit, Integration &amp; Fault Injection) | JUnit 5 | k6 (Load Testing) | OpenTelemetry &amp; Jaeger (W3C Distributed Tracing)</td>
        </tr>
        <tr>
          <td class="sk-label">Tools &amp; DevOps</td>
          <td>Docker &amp; Docker Compose | Git | GitHub Actions | DBeaver | Swagger / OpenAPI 3 | Maven | n8n | OCR &amp; RAG</td>
        </tr>
        <tr>
          <td class="sk-label">Architecture &amp; Practices</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | SOLID | Layered Architecture (MVC + DAO / DTOs) | API-First | Agile / Scrum</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Back-End Programming Instructor (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students in Back-End Programming covering programming logic, relational databases with <strong>DBeaver and PostgreSQL</strong>, <strong>OOP in Java</strong>, and <strong>REST APIs with Spring Boot</strong>, closing with an integrative project.</li>
          <li>Created all teaching material (exercise PDFs, summaries, tutorials and support resources) from the institution's syllabus, plus one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Full-Stack / Back-End Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petropolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a 790-hour intensive programme in progressive tracks with strong emphasis on <strong>PostgreSQL Databases</strong>, <strong>OOP in Java 17</strong> and <strong>RESTful APIs with Spring Boot and Spring Security</strong>, closing with a corporate MVP delivered under contract in partnership with <strong>Zeiss</strong>.</li>
          <li>Designed and implemented layered backend architectures (Controller, Service, Repository, DAO, DTOs), 3NF relational schemas, JWT/RBAC authentication and API integrations.</li>
          <li>Worked in an Agile team with Git, code reviews and sprints, applying OOP, SOLID and clean-code standards across all deliverables.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | Java 17 | Spring Boot 4.1 | PostgreSQL 18 | JWT (RBAC) | n8n (OCR &amp; RAG) | Swagger/OpenAPI | Maven - Serratec Final Project · Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>To replace inconsistent manual prescription reading across optical shops, the team built a corporate platform with a <strong>Java 17 and Spring Boot 4 back end</strong> and <strong>PostgreSQL</strong> persistence, integrated with an <strong>OCR and AI pipeline (n8n/RAG)</strong> that processes clinical parameters extracted from ophthalmic prescriptions and cross-references them with patient lifestyle profiles to recommend the right Zeiss lens.</li>
          <li>Implemented <strong>stateless JWT authentication backing a three-tier RBAC hierarchy</strong> (Zeiss admin, store manager, employee) that strictly scopes data visibility across partner stores, providing analytical aggregation endpoints for commercial performance (conversion rate, seller ranking, most recommended and best-selling lenses) and full CRUD for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Personal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Distributed, event-driven fleet and logistics REST API engine in <strong>.NET 10 (C# 14)</strong> (27 endpoints across 5 DDD Bounded Contexts: Vehicles, Drivers, Deliveries, Routes and Maintenance), operating as an OAuth 2.0 / OIDC Resource Server with <strong>Keycloak (asymmetric RS256/JWKS validation)</strong> and RBAC across four roles.</li>
          <li>Implements the <strong>Transactional Outbox pattern</strong> atomically inside DbContext eliminating dual-write hazards, multi-replica polling via <code>FOR UPDATE SKIP LOCKED</code>, optimistic concurrency with PostgreSQL <code>xmin</code>, <strong>RabbitMQ</strong> publishing (Publisher Confirms, 10s/30s/90s TTL retry queues and a Dead-Letter Queue), an idempotent consumer keyed by <code>MessageId</code>, and W3C distributed tracing with OpenTelemetry and Jaeger.</li>
          <li>Suite of <strong>300 automated tests</strong> (166 unit and 134 integration/fault-injection) in xUnit with 100% pass rate and empirical throughput of <strong>278 sustained RPS</strong> under ACID writes in PostgreSQL (k6).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Collaborative (Serratec Residency) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>RESTful e-commerce backend built in <strong>Java 17 and Spring Boot 3</strong> structured in layers (Controller, Service, Repository and DTOs) to decouple business rules, handle concurrent inventory control, validate orders and protect domain entities from direct exposure.</li>
          <li>Implements custom security filters in the <strong>Spring Security 6 filter chain for stateless JWT authentication</strong> and granular Role-Based Access Control (RBAC), optimized relational mapping with <strong>JPA/Hibernate on PostgreSQL</strong>, and interactive OpenAPI 3 / Swagger UI documentation.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Payroll System - <a href="https://github.com/DevYuriVieira/payroll-system-java">github.com/DevYuriVieira/payroll-system-java</a></div>
        <div class="entry-meta">Collaborative (4 devs) | 2026 | Java 17 | PostgreSQL | JDBC | MVC | DAO | Serratec OOP Final Project</div>
        <ul class="bullets">
          <li>Automates batch processing and progressive <strong>INSS and IRRF</strong> payroll tax calculations with dependent deductions under Brazilian tax law, reading employee data from CSV and persisting everything through <strong>raw JDBC on PostgreSQL</strong> in a layered <strong>MVC + DAO</strong> architecture built without an ORM to reinforce SQL and OOP fundamentals.</li>
          <li>Uses <code>BigDecimal (RoundingMode.HALF_UP)</code> throughout for exact monetary precision, a <strong>Singleton</strong> for the JDBC database connection manager, custom domain exceptions (<code>CpfInvalidoException</code>, <code>SalarioInvalidoException</code>) and automated CSV report export.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Dental Clinic Management System (DCMS) - <a href="https://github.com/DevYuriVieira/dentacare-management-system">github.com/DevYuriVieira/dentacare-management-system</a></div>
        <div class="entry-meta">Collaborative (6 devs - Serratec Residency 2026.1) | 2026 | PostgreSQL 16+ | Advanced SQL (DDL, DML, DQL) | 3NF Modeling | Database Indexing | SQL Views</div>
        <ul class="bullets">
          <li>Transactional relational database system engineered in <strong>PostgreSQL 16+</strong> and strictly normalized up to <strong>3rd Normal Form (3NF)</strong> to centralize appointment lifecycle workflows (Scheduled, Completed, Canceled), N:N associative procedure histories (<code>consulta_procedimento</code>) and dentist records (CRO) with zero orphan data.</li>
          <li>Enforces business rules via <strong>DDL constraints</strong> (Regex validation for CPF and CRO, logical temporal check constraints and unique keys), strict referential integrity using <code>RESTRICT</code> and <code>CASCADE</code>, plus strategic <strong>relational Indexes</strong> and <strong>analytical SQL Views</strong> for operational and revenue reporting.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree - Software Engineering</div>
        <div class="edu-meta">Estacio University | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceara (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree - Industrial Engineering</div>
        <div class="edu-meta">Estacio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS</h2>
      <ul class="cert-list">
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, SQL)</strong> - DIO</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">LANGUAGES</h2>
      <div class="languages">
        <strong>Portuguese</strong> Native &nbsp;|&nbsp; <strong>English</strong> Advanced (B2+) &nbsp;|&nbsp; <strong>Spanish</strong> Advanced (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

// ============================================================================
// 5. FULL-STACK CV — PORTUGUESE (Improved!)
// ============================================================================
const FULLSTACK_PT = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Engenheiro de Software Full-Stack</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Engenheiro de Software Full-Stack | Java (Spring Boot) | .NET / C# | TypeScript (React &amp; Angular)</div>
    <div class="header__contact">
      Nova Friburgo, RJ <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">RESUMO PROFISSIONAL</h2>
      <p class="summary">
        Engenheiro de Software Full-Stack com foco em <strong>Java (Spring Boot)</strong>, <strong>.NET 10 (C#)</strong> e <strong>TypeScript (React, Angular e React Native)</strong>, além de sólida experiência prática em <strong>Python (Django)</strong>, <strong>APIs REST</strong>, <strong>RabbitMQ</strong> e <strong>PostgreSQL</strong>. Desenvolvo aplicações completas com segurança (JWT, Keycloak OIDC), integrações com IA generativa e suítes de testes automatizados. Mais de 910 h de formação prática em software pelo Serratec e UECE. Pós-graduado em Engenharia de Software. Inglês Avançado (B2+), com programa C1/C2 concluído pela Wizard. Disponível para atuação remota nacional e internacional.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">App em Produção<br>(Angular 22 &amp; WebGL)</td>
          <td>Portfólio pessoal desenvolvido em Angular 22 e TypeScript, com Signals nativos e sistema de partículas WebGL acelerado por GPU, coberto por 195 testes automatizados (Vitest, Playwright + Axe-Core e Cypress) e auditoria Lighthouse 100/100/100/100 no desktop.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP full-stack construído com um time de 11 pessoas para a Zeiss (React, TypeScript e Java/Spring Boot 4), substituindo a leitura manual de receitas por OCR + recomendação de lentes via IA e dashboards de vendas em tempo real.</td>
        </tr>
        <tr>
          <td class="ach-label">Instrutor de<br>Programação</td>
          <td>Lecionei Programação Back-End (Java/Spring Boot, POO e PostgreSQL) para uma turma de 10 alunos no SENAI/FAETEC, elaborando todo o material didático a partir da ementa da instituição.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Linguagens</td>
          <td>Java 17+ | C# 14 (.NET 10) | TypeScript | JavaScript (ES6+) | Python | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend &amp; Mobile</td>
          <td>React | Angular 22 (Signals, Standalone, OnPush, PWA) | React Native (Expo SDK 54) | Three.js / WebGL | SCSS | Zod | HTML5 | CSS3</td>
        </tr>
        <tr>
          <td class="sk-label">Backend &amp; Mensageria</td>
          <td>Spring Boot 3/4 | ASP.NET Core (.NET 10) | Django | APIs REST | RabbitMQ (Outbox, DLQ) | JPA/Hibernate | EF Core 10 | Spring Security 6 | Keycloak OIDC | JWT &amp; Webhooks</td>
        </tr>
        <tr>
          <td class="sk-label">Testes &amp; Qualidade</td>
          <td>xUnit | JUnit 5 | Vitest | Playwright | Cypress | Axe-Core (WCAG) | k6 (Testes de Carga) | OpenTelemetry &amp; Jaeger</td>
        </tr>
        <tr>
          <td class="sk-label">Banco de Dados</td>
          <td>PostgreSQL 16/18 (FOR UPDATE SKIP LOCKED, MVCC xmin, 3FN) | MySQL | SQL | Otimização de Consultas (N+1)</td>
        </tr>
        <tr>
          <td class="sk-label">Ferramentas</td>
          <td>Git | GitHub Actions | Docker &amp; Docker Compose | DBeaver | Vercel (CI/CD) | Swagger / OpenAPI 3 | Maven | n8n &amp; OCR</td>
        </tr>
        <tr>
          <td class="sk-label">Metodologias</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | SOLID | Agile / Scrum | API-First</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação Back-End (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos em Programação Back-End cobrindo lógica de programação (JavaScript), banco de dados relacional com DBeaver e PostgreSQL, <strong>POO em Java</strong> e <strong>APIs REST com Spring Boot</strong>, encerrando com projeto integrador.</li>
          <li>Elaborei todo o material didático (PDFs de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, além de tirar dúvidas individuais dos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí curso em trilhas progressivas: lógica, banco de dados PostgreSQL, <strong>POO em Java</strong>, frontend, <strong>APIs RESTful com Spring Boot</strong>, <strong>React e React Native</strong>, encerrando com projeto final full-stack entregue como MVP corporativo sob contrato, em parceria com a <strong>Zeiss</strong>.</li>
          <li>Desenvolvi projetos práticos ao final de cada disciplina, de modelagem de dados 3FN a interfaces responsivas e integrações via API.</li>
          <li>Atuei em equipe Ágil com Git, revisões de código e sprints, aplicando POO, SOLID e boas práticas em todos os entregáveis.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo cumprimento dos cronogramas de atendimento.</li>
          <li>Realizei suporte operacional Nível 1, atuando na resolução de conflitos de agenda e comunicação direta com clientes.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - Assistente de Recomendações</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4 - MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web full-stack (<strong>front-end em React/TypeScript, back-end em Java 17/Spring Boot 4</strong>) que lê receitas automaticamente via OCR conectado a um pipeline de IA (n8n/RAG) e cruza os dados extraídos com o perfil do paciente para sugerir a lente Zeiss adequada.</li>
          <li>Painel gerencial em tempo real com desempenho individual e dados consolidados para a Zeiss (mais vendidas, mais recomendadas, taxa de conversão e ranking). Autenticação JWT com controle de acesso RBAC em três níveis (admin Zeiss, gerente e funcionário) e CRUD completo de lojas, produtos e funcionários.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Pessoal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Motor back-end distribuído e orientado a eventos em <strong>.NET 10 (C# 14)</strong> para gestão de frotas e logística (27 endpoints REST em 5 contextos delimitados DDD) com Clean Architecture, operando como Resource Server OAuth 2.0 / OIDC com <strong>Keycloak (RS256/JWKS)</strong> e RBAC para quatro papéis.</li>
          <li>Implementa <strong>Transactional Outbox</strong> com publicação em <strong>RabbitMQ</strong> (Publisher Confirms, filas de retry com TTL e Dead-Letter Queue), consumidor idempotente por <code>MessageId</code>, concorrência otimista com <code>xmin</code> do PostgreSQL, <code>FOR UPDATE SKIP LOCKED</code>, tracing distribuído no Jaeger, <strong>300 testes automatizados</strong> em xUnit e <strong>278 RPS sustentados</strong> em escritas ACID (k6).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular 22</strong>, Signals nativos (<code>signal/computed</code>) e <code>OnPush</code> em todos os componentes, incluindo um sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, configurado como PWA com service worker.</li>
          <li>Coberto por <strong>195 testes automatizados</strong> em três camadas (140 unitários Vitest, 38 E2E Playwright com auditoria WCAG 2.1 AA/AAA via Axe-Core, 17 E2E Cypress), suporte trilíngue i18n (PT/EN/ES) e auditoria Google Lighthouse 100/100/100/100 no desktop.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Colaborativo (Residência Serratec) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>API RESTful de e-commerce construída em <strong>Java 17 e Spring Boot 3</strong> estruturada em camadas (Controller, Service, Repository e DTOs) para isolar regras de negócio, gerenciar controle de estoque concorrente e blindar entidades de domínio.</li>
          <li>Implementa autenticação stateless via <strong>JWT e autorização RBAC no Spring Security 6</strong>, persistência relacional otimizada com <strong>JPA/Hibernate no PostgreSQL</strong> e documentação interativa com Swagger UI / OpenAPI 3.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Aurora - Plataforma de Evolução Pessoal - <a href="https://github.com/DevYuriVieira/aurora-growth-platform">github.com/DevYuriVieira/aurora-growth-platform</a></div>
        <div class="entry-meta">Colaborativo (6 devs) | 2026 | React Native | Expo SDK 54 | TypeScript | React Navigation | Zod | AsyncStorage | Projeto Final - Aplicações Multiplataformas</div>
        <ul class="bullets">
          <li>App <strong>React Native/Expo SDK 54 e TypeScript</strong> para acompanhamento de metas pessoais, gamificação por XP, mentorias e comunidade, com sessão persistida (AsyncStorage), rotas protegidas via Context API e módulo de metas com CRUD completo.</li>
          <li>Combina três padrões de navegação (Drawer, Stack e Tabs), formulários validados com <strong>React Hook Form + Zod</strong>, e recursos nativos como câmera, galeria, mapas/geolocalização via Expo Location, <strong>Expo Secure Store</strong> e check-in de eventos por <strong>QR Code</strong>.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">E-commerce Full-Stack - <a href="https://github.com/DevYuriVieira/django-ecommerce">github.com/DevYuriVieira/django-ecommerce</a></div>
        <div class="entry-meta">Pessoal | 2025 | Python 3.11+ | Django 5.x | SQLite | Vanilla JS (ES6+) | HTML5 &lt;template&gt; | API REST | Webhook Idempotente</div>
        <ul class="bullets">
          <li>Plataforma e-commerce full-stack construída do zero (autenticação, carrinho, cupons, pedidos) organizada em <strong>Service Layer no Django 5</strong>, projetada para lidar com concorrência crítica e eliminar gargalos de N+1 queries via <code>prefetch_related</code> e <code>select_related</code>.</li>
          <li>Implementa <strong>webhook de pagamento assíncrono idempotente</strong> com transações atômicas (<code>transaction.atomic</code>), API REST versionada sem DRF, e frontend modular em JavaScript (ES6+) com <code>&lt;template&gt;</code> nativo, proteção CSRF e manipulação segura do DOM contra XSS.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES</h2>
      <ul class="cert-list">
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Desenvolvimento Front-End com Inteligência Artificial (80 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, Angular)</strong> - DIO</li>
        <li><strong>Programação em Python</strong> - Senac</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">IDIOMAS</h2>
      <div class="languages">
        <strong>Português</strong> Nativo &nbsp;|&nbsp; <strong>Inglês</strong> Avançado (B2+) &nbsp;|&nbsp; <strong>Espanhol</strong> Avançado (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

// ============================================================================
// 6. FULL-STACK CV — ENGLISH (Improved! Fri On Line kept omitted as requested)
// ============================================================================
const FULLSTACK_EN = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Yuri Vieira Teixeira - Full-Stack Software Engineer</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Full-Stack Software Engineer | Java (Spring Boot) | .NET / C# | TypeScript (React &amp; Angular)</div>
    <div class="header__contact">
      Nova Friburgo, Brazil <span class="header__sep">|</span> +55 22 99896-2216 <span class="header__sep">|</span> yurivieirateixeira98@gmail.com
    </div>
    <div class="header__links">
      linkedin.com/in/yuri-vieira-teixeira <span class="header__sep">|</span> github.com/DevYuriVieira <span class="header__sep">|</span> devyurivieira.vercel.app
    </div>
  </header>

  <div class="container">
    <section class="section">
      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
      <p class="summary">
        Full-Stack Software Engineer with a focus on <strong>Java (Spring Boot)</strong>, <strong>.NET 10 (C#)</strong> and <strong>TypeScript (React, Angular and React Native)</strong>, plus hands-on experience in <strong>Python (Django)</strong>, <strong>REST APIs</strong>, <strong>RabbitMQ</strong> and <strong>PostgreSQL</strong>. I build complete applications covering security (JWT, Keycloak OIDC), generative AI integrations and automated test suites. Over 910 h of software development training at Serratec and UECE. Postgraduate in Software Engineering. Advanced English (B2+), with a C1/C2 programme completed at Wizard. Open to national and international remote roles.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Live Production App<br>(Angular 22 &amp; WebGL)</td>
          <td>Personal portfolio built with Angular 22 and TypeScript, native Signals and a GPU-accelerated WebGL particle system, covered by 195 automated tests (Vitest, Playwright + Axe-Core and Cypress) and a 100/100/100/100 Lighthouse audit on desktop.</td>
        </tr>
        <tr>
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>Full-stack MVP built with an 11-person team for Zeiss (React, TypeScript and Java/Spring Boot 4), replacing manual prescription reading with OCR + AI-driven lens recommendations and real-time sales dashboards.</td>
        </tr>
        <tr>
          <td class="ach-label">Programming Instructor</td>
          <td>Taught Back-End Programming (Java/Spring Boot, OOP and PostgreSQL) to a class of 10 students at SENAI/FAETEC, creating all teaching material from the institution's syllabus.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Languages</td>
          <td>Java 17+ | C# 14 (.NET 10) | TypeScript | JavaScript (ES6+) | Python | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend &amp; Mobile</td>
          <td>React | Angular 22 (Signals, Standalone, OnPush, PWA) | React Native (Expo SDK 54) | Three.js / WebGL | SCSS | Zod | HTML5 | CSS3</td>
        </tr>
        <tr>
          <td class="sk-label">Backend &amp; Messaging</td>
          <td>Spring Boot 3/4 | ASP.NET Core (.NET 10) | Django | REST APIs | RabbitMQ (Outbox, DLQ) | JPA/Hibernate | EF Core 10 | Spring Security 6 | Keycloak OIDC | JWT &amp; Webhooks</td>
        </tr>
        <tr>
          <td class="sk-label">Testing &amp; Quality</td>
          <td>xUnit | JUnit 5 | Vitest | Playwright | Cypress | Axe-Core (WCAG) | k6 (Load Testing) | OpenTelemetry &amp; Jaeger</td>
        </tr>
        <tr>
          <td class="sk-label">Databases</td>
          <td>PostgreSQL 16/18 (FOR UPDATE SKIP LOCKED, MVCC xmin, 3NF) | MySQL | SQL | Query Optimisation (N+1 elimination)</td>
        </tr>
        <tr>
          <td class="sk-label">Tools</td>
          <td>Git | GitHub Actions | Docker &amp; Docker Compose | DBeaver | Vercel (CI/CD) | Swagger / OpenAPI 3 | Maven | n8n &amp; OCR</td>
        </tr>
        <tr>
          <td class="sk-label">Practices</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | SOLID | Agile / Scrum | API-First</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Back-End Programming Instructor (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students in Back-End Programming covering programming logic (JavaScript), relational databases with DBeaver and PostgreSQL, <strong>OOP in Java</strong>, and <strong>REST APIs with Spring Boot</strong>, closing with an integrative project.</li>
          <li>Created all teaching material (exercise PDFs, summaries, tutorials and support resources) from the institution's syllabus, plus one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Full-Stack Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petropolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a programme in progressive tracks: logic, PostgreSQL databases, <strong>OOP in Java</strong>, frontend, <strong>RESTful APIs with Spring Boot</strong>, <strong>React and React Native</strong>, closing with a full-stack final project delivered as a corporate MVP under contract, in partnership with <strong>Zeiss</strong>.</li>
          <li>Delivered practical projects at the end of each subject, from 3NF data modelling to responsive interfaces and API integrations.</li>
          <li>Worked in an Agile team with Git, code reviews and sprints, applying OOP, SOLID and clean-code standards across all deliverables.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4 - Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses by hand, making recommendations inconsistent. The team built a full-stack web platform (<strong>React/TypeScript front end, Java 17/Spring Boot 4 back end</strong>) that reads prescriptions automatically through OCR connected to an AI pipeline (n8n/RAG) and cross-references the extracted data with the patient's profile to suggest the right Zeiss lens.</li>
          <li>Store managers get a real-time dashboard tracking individual performance, while Zeiss sees aggregated data across partner stores (most recommended and best-selling lenses, conversion rate and seller ranking). JWT authentication backs a three-tier RBAC hierarchy (Zeiss admin, store manager, employee) with full CRUD for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Personal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Distributed, event-driven fleet and logistics REST API engine in <strong>.NET 10 (C# 14)</strong> (27 endpoints across 5 DDD Bounded Contexts) with Clean Architecture, operating as an OAuth 2.0 / OIDC Resource Server with <strong>Keycloak (RS256/JWKS)</strong> and RBAC across four roles.</li>
          <li>Implements the <strong>Transactional Outbox pattern</strong> with <strong>RabbitMQ</strong> publishing (Publisher Confirms, TTL retry queues and a Dead-Letter Queue), an idempotent consumer keyed by <code>MessageId</code>, optimistic concurrency with PostgreSQL <code>xmin</code>, <code>FOR UPDATE SKIP LOCKED</code>, distributed tracing in Jaeger, <strong>300 automated xUnit tests</strong> and <strong>278 sustained RPS</strong> under ACID writes (k6).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Live in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular 22</strong> standalone components, native Signals (<code>signal/computed</code>) and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as a PWA with a service worker.</li>
          <li>Covered by <strong>195 automated tests</strong> across three layers (140 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core, 17 Cypress E2E specs), trilingual i18n (PT/EN/ES) and a 100/100/100/100 Google Lighthouse audit on desktop.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Collaborative (Serratec Residency) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>RESTful e-commerce backend built in <strong>Java 17 and Spring Boot 3</strong> structured in layers (Controller, Service, Repository and DTOs) to decouple business rules, handle concurrent inventory control and protect domain entities from direct exposure.</li>
          <li>Implements stateless <strong>JWT authentication and granular RBAC in Spring Security 6</strong>, optimized relational mapping with <strong>JPA/Hibernate on PostgreSQL</strong>, and interactive OpenAPI 3 / Swagger UI documentation.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Aurora - Personal Growth Platform - <a href="https://github.com/DevYuriVieira/aurora-growth-platform">github.com/DevYuriVieira/aurora-growth-platform</a></div>
        <div class="entry-meta">Collaborative (6 devs) | 2026 | React Native | Expo SDK 54 | TypeScript | React Navigation | Zod | AsyncStorage | Final Project - Multiplatform Applications</div>
        <ul class="bullets">
          <li>A <strong>React Native/Expo SDK 54 and TypeScript</strong> app for tracking personal goals, XP gamification, mentorships and community activity, with session persistence (AsyncStorage), Context-API-protected routes and a goals module with full CRUD.</li>
          <li>Combines three navigation patterns in one app (Drawer, Stack and Tabs), Zod-validated forms via <strong>React Hook Form + Zod</strong>, and native device features such as camera, gallery, maps/geolocation through Expo Location, <strong>Expo Secure Store</strong> and <strong>QR-code</strong> event check-in.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Django Full-Stack E-commerce - <a href="https://github.com/DevYuriVieira/django-ecommerce">github.com/DevYuriVieira/django-ecommerce</a></div>
        <div class="entry-meta">Personal | 2025 | Python 3.11+ | Django 5.x | SQLite | Vanilla JS (ES6+) | HTML5 &lt;template&gt; | REST API | Idempotent Webhook</div>
        <ul class="bullets">
          <li>Full-stack e-commerce platform built from scratch (auth, cart, coupons, orders) organised around a <strong>Django 5 Service Layer</strong>, engineered to handle critical concurrency edge cases and eliminate N+1 query bottlenecks via <code>prefetch_related</code> and <code>select_related</code>.</li>
          <li>Implements an <strong>idempotent async payment webhook</strong> wrapped in atomic transactions (<code>transaction.atomic</code>), a versioned REST API built without DRF, and a modular Vanilla JS frontend using native HTML5 <code>&lt;template&gt;</code>, CSRF protection and XSS-safe DOM handling.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree - Software Engineering</div>
        <div class="edu-meta">Estacio University | 2024–2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceara (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree - Industrial Engineering</div>
        <div class="edu-meta">Estacio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS</h2>
      <ul class="cert-list">
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Front-End Development with Artificial Intelligence (80 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, Angular)</strong> - DIO</li>
        <li><strong>Programming in Python</strong> - Senac</li>
        <li><strong>White Belt - Lean Six Sigma</strong> - Frons</li>
      </ul>
    </section>

    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">LANGUAGES</h2>
      <div class="languages">
        <strong>Portuguese</strong> Native &nbsp;|&nbsp; <strong>English</strong> Advanced (B2+) &nbsp;|&nbsp; <strong>Spanish</strong> Advanced (B2+)
      </div>
    </section>
  </div>
</body>
</html>`;

async function generateAllSixCvs() {
  const browser = await chromium.launch();
  try {
    const targets = [
      { html: FULLSTACK_PT, filename: 'cv-yuri-vieira-teixeira-pt.pdf' },
      { html: FULLSTACK_EN, filename: 'cv-yuri-vieira-teixeira-en.pdf' },
      { html: FRONTEND_PT, filename: 'cv-yuri-vieira-teixeira-frontend-pt.pdf' },
      { html: FRONTEND_EN, filename: 'cv-yuri-vieira-teixeira-frontend-en.pdf' },
      { html: BACKEND_PT, filename: 'cv-yuri-vieira-teixeira-backend-pt.pdf' },
      { html: BACKEND_EN, filename: 'cv-yuri-vieira-teixeira-backend-en.pdf' },
    ];

    for (const t of targets) {
      const page = await browser.newPage();
      await page.setContent(t.html, { waitUntil: 'networkidle' });
      const outPath = path.join(ASSETS_DIR, t.filename);
      await page.pdf({
        path: outPath,
        format: 'A4',
        printBackground: true,
      });
      await page.close();
      console.log('Generated:', outPath);
    }
  } finally {
    await browser.close();
  }
}

generateAllSixCvs().catch((err) => {
  console.error(err);
  process.exit(1);
});
