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
    padding: 19px 36px 15px 36px;
    border-bottom: 3.5px solid #2b6cb0;
    margin-bottom: 9px;
  }
  .header__name {
    font-size: 21.5pt;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3px;
    letter-spacing: -0.2px;
  }
  .header__subtitle {
    font-size: 10.5pt;
    color: #bfd4ea;
    font-weight: 400;
    margin-bottom: 7px;
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
    margin-bottom: 6.5px;
  }
  .section-title {
    font-size: 9.4pt;
    font-weight: 700;
    text-transform: uppercase;
    color: #16697a;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 2px;
    margin-bottom: 4.5px;
    letter-spacing: 0.3px;
    break-after: avoid;
    page-break-after: avoid;
  }
  .page-break {
    break-before: page;
    page-break-before: always;
  }
  .summary {
    font-size: 8.9pt;
    color: #222222;
    line-height: 1.31;
  }
  /* Destaques / Key Achievements (Linear ATS-safe Block Layout) */
  .ach-box {
    background-color: #f4f7f9;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }
  .ach-item {
    padding: 4px 9px;
    border-bottom: 1px solid #e2e8f0;
    font-size: 8.75pt;
    line-height: 1.28;
    color: #222222;
  }
  .ach-item:last-child {
    border-bottom: none;
  }
  .ach-label {
    font-weight: 700;
    color: #1a202c;
  }
  /* Technical Skills (Linear ATS-safe Block Layout) */
  .skills-list {
    display: block;
  }
  .sk-row {
    padding: 1.1px 0;
    font-size: 8.75pt;
    line-height: 1.28;
    color: #222222;
  }
  .sk-label {
    font-weight: 700;
    color: #1a202c;
  }
  /* Experience & Projects (Linear Single-Column ATS Flow) */
  .entry {
    margin-bottom: 4.5px;
  }
  .entry:last-child {
    margin-bottom: 0;
  }
  .entry-title {
    font-size: 9.05pt;
    font-weight: 700;
    color: #111827;
    break-after: avoid;
    page-break-after: avoid;
  }
  .entry-title a {
    color: #16697a;
    font-weight: 700;
  }
  .entry-meta {
    font-size: 8.3pt;
    color: #555555;
    font-style: italic;
    margin-bottom: 1.5px;
    break-after: avoid;
    page-break-after: avoid;
  }
  .bullets {
    list-style-type: disc;
    padding-left: 16px;
    margin: 0;
  }
  .bullets li {
    margin-bottom: 1px;
    font-size: 8.7pt;
    line-height: 1.27;
    color: #222222;
  }
  /* Education */
  .edu-item {
    margin-bottom: 2.2px;
    page-break-inside: avoid;
  }
  .edu-title {
    font-size: 8.85pt;
    font-weight: 700;
    color: #111827;
  }
  .edu-meta {
    font-size: 8.3pt;
    color: #555555;
  }
  /* Certifications */
  .cert-list {
    list-style-type: disc;
    padding-left: 16px;
    margin: 0;
  }
  .cert-list li {
    font-size: 8.65pt;
    margin-bottom: 1px;
    color: #222222;
  }
  .languages {
    font-size: 8.85pt;
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
        Engenheiro de Software especializado em <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong> e <strong>React Native (Expo)</strong>, com experiência prática em integração de <strong>APIs RESTful</strong>, <strong>Java (Spring Boot)</strong>, <strong>C#/.NET</strong> e <strong>PostgreSQL</strong>. Experiência no desenvolvimento de aplicações web e mobile responsivas, arquiteturas offline-first, autenticação segura (OAuth 2.0/OIDC, JWT, Keycloak), acessibilidade web (WCAG 2.1 AA/AAA) e testes automatizados (Vitest, Jest, Playwright e Cypress). Concluiu mais de 910 horas de formação prática em desenvolvimento de software pelo Serratec e UECE, e possui pós-graduação em Engenharia de Software. Inglês Avançado (B2+). Disponível para oportunidades remotas no Brasil e no exterior.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS — Plataforma de Recomendação com IA:</span> MVP corporativo construído com um time de 11 pessoas para a ZEISS, desenvolvendo a interface em React e TypeScript para validação clínica assistida via OCR, recomendação de lentes via IA (n8n/RAG) e dashboards analíticos em tempo real.
        </div>
        <div class="ach-item">
          <span class="ach-label">Work-Fitness &amp; Portfólio (Aplicações em Produção):</span> Plataforma comercial freelance (TypeScript, Clean Architecture, Docker/Nginx, 217 testes automatizados) e portfólio interativo (Angular Signals, WebGL/Three.js, 213 testes automatizados), ambos com nota 100/100 nas quatro categorias do Google Lighthouse.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow Mobile (React Native Offline-First):</span> Aplicativo de precisão agrícola em React Native (Expo) com fila transacional FIFO offline-first, caderno regulatório MAPA com assinatura digital em canvas (SHA-256), login biométrico OIDC e 138 testes em 26 suítes Jest.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Linguagens:</span> TypeScript | JavaScript (ES6+) | HTML5 | CSS3 / SCSS | SQL</div>
        <div class="sk-row"><span class="sk-label">Frontend Web:</span> React | Angular (Signals, Standalone, OnPush, PWA) | Three.js / WebGL | Framer Motion | Styled Components | Vite</div>
        <div class="sk-row"><span class="sk-label">Mobile &amp; UI/UX:</span> React Native (Expo, Offline-First) | React Navigation | React Hook Form | Zod | Acessibilidade (WCAG 2.1 AA/AAA &amp; VLibras)</div>
        <div class="sk-row"><span class="sk-label">Testes &amp; Qualidade:</span> Vitest | Jest | Playwright (E2E) | Cypress | Axe-Core | Google Lighthouse</div>
        <div class="sk-row"><span class="sk-label">Integração &amp; Backend:</span> APIs RESTful | OAuth 2.0 / OIDC (Keycloak) &amp; JWT | Java (Spring Boot) | C# (.NET) | PostgreSQL</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Arquitetura:</span> Docker | Nginx | CI/CD (GitHub Actions, Vercel) | Git | Clean Architecture | Agile / Scrum</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack Freelance — Work-Fitness</div>
        <div class="entry-meta">Cliente Independente | 2025 - Atual | Remoto</div>
        <ul class="bullets">
          <li>Desenvolvimento e manutenção de plataforma comercial em produção (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), com responsabilidade ponta a ponta pela arquitetura (Clean Architecture), implementação em <strong>TypeScript</strong>, acessibilidade (WCAG 2.1 AA e VLibras) e implantação em <strong>Docker e Nginx</strong>.</li>
          <li>Implementação de motor de avaliação corporal, qualificação de leads com rastreamento UTM integrado ao WhatsApp e telemetria (GA4, GTM e Meta Pixel), mantendo <strong>217 testes automatizados (Vitest e Playwright)</strong> e nota 100/100 nas quatro categorias do Google Lighthouse.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação — SENAI / FAETEC</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos cobrindo lógica de programação com <strong>JavaScript</strong>, integração com bancos de dados relacionais (DBeaver e PostgreSQL), POO em Java e construção de APIs RESTful com <strong>Spring Boot</strong>, culminando em um projeto integrado.</li>
          <li>Elaborei todo o material didático (apostilas de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, prestando suporte individualizado aos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Front-End &amp; Full-Stack (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí residência imersiva de 790 horas com forte atuação em <strong>Frontend Web (React, TypeScript, HTML5/CSS3)</strong> e <strong>Mobile (React Native com Expo)</strong> integrados a APIs RESTful (Spring Boot), culminando em um MVP corporativo entregue sob contrato em parceria com a <strong>ZEISS</strong>.</li>
          <li>Desenvolvi interfaces responsivas, componentizadas e acessíveis ao final de cada módulo, aplicando validação de esquemas (Zod), gerenciamento de estado, consumo assíncrono de APIs e revisão de código em equipe Ágil (Scrum e Git).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo o cumprimento dos cronogramas de atendimento.</li>
          <li>Realizei suporte operacional Nível 1, atuando na resolução de conflitos de agenda e comunicação direta com clientes corporativos.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - Plataforma de Recomendação com IA</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React | TypeScript | Vite | Styled Components | React Router | ApexCharts | Java | Spring Boot | OCR &amp; RAG (n8n) - Projeto Final Serratec · MVP Corporativo (Contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web com <strong>front-end em React, TypeScript e Styled Components</strong> (integrado a back-end Spring Boot e pipeline de IA n8n/RAG) que exibe validação clínica assistida (Human-in-the-Loop) com indicador de confiança dos campos extraídos via OCR e cruza as métricas ópticas com os hábitos do paciente para recomendar a lente ZEISS ideal.</li>
          <li>Desenvolvimento de <strong>dashboards analíticos interativos com ApexCharts</strong> para gerentes e para a matriz da ZEISS (lentes mais vendidas, evolução temporal, conversão e ranking de vendedores). Controle de rotas na UI baseado em autenticação JWT em três níveis (admin ZEISS, gerente e funcionário), máquina de estados de atendimento (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) e CRUD completo para lojas, produtos e funcionários.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Aplicativo Mobile Offline-First - <a href="https://github.com/DevYuriVieira/farmflow-mobile">github.com/DevYuriVieira/farmflow-mobile</a></div>
        <div class="entry-meta">Pessoal | 2026 | React Native | Expo | TypeScript | Arquitetura Offline-First | Keycloak OIDC | Jest | API Java / Spring Boot</div>
        <ul class="bullets">
          <li>Aplicativo para operadores de campo que trabalham sem conectividade: <strong>fila FIFO transacional</strong> persistida localmente em AsyncStorage com reconciliação determinística ao reconectar, garantindo zero perda de apontamentos de pulverização.</li>
          <li>Caderno de defensivos exigido pelo MAPA com <strong>assinatura digital desenhada em canvas e hash SHA-256</strong>, login biométrico com Keycloak OIDC, integrado a uma API distribuída em Java / Spring Boot que sustentou <strong>2.450 requisições por segundo (req/s)</strong> em testes de carga k6 (ambiente de benchmark controlado).</li>
          <li>Coberto por <strong>138 testes automatizados em 26 suítes Jest</strong> no cliente mobile, compondo uma suíte de 549 testes entre aplicativo e backend.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Plataforma Comercial - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (Cliente Real) | 2025 - Atual | TypeScript | Vite | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | Em produção</div>
        <ul class="bullets">
          <li>Motor de avaliação corporal (IMC da OMS, percentual de gordura por Deurenberg e taxa metabólica basal por Mifflin-St Jeor) isolado em um <strong>núcleo de Clean Architecture desacoplado do DOM</strong>, gerando diagnósticos imediatos e encaminhamento de leads qualificados com preservação de tags UTM para o WhatsApp (bundle de 32 kB e nota <strong>100/100 nas quatro categorias do Google Lighthouse</strong>).</li>
          <li>Acessibilidade implementada como requisito de arquitetura (WCAG 2.1 AA, widget VLibras sem layout shift, leitura biônica e filtros para daltonismo), validada por <strong>170 testes unitários Vitest e 47 especificações E2E Playwright em 26 viewports</strong>, servida em contêiner Docker multi-stage com Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular</strong>, <strong>Signals nativos (<code>signal/computed</code>)</strong> e detecção de mudanças <code>OnPush</code> em toda a aplicação, incluindo sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, configurado como PWA offline-ready com service worker.</li>
          <li>Coberto por <strong>213 testes automatizados</strong> em três camadas (158 unitários Vitest, 38 E2E Playwright com auditoria WCAG 2.1 AA/AAA via Axe-Core e 17 E2E Cypress), suporte trilíngue i18n (PT/EN/ES) e nota 100/100 nas quatro categorias do Google Lighthouse no desktop.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://github.com/DevYuriVieira/playstation-evolution-timeline">github.com/DevYuriVieira/playstation-evolution-timeline</a> · <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | React | TypeScript | Vite | Framer Motion | CSS Modules | Intersection Observer | Em produção</div>
        <ul class="bullets">
          <li>Aplicação web interativa em produção que apresenta 30 anos de evolução de hardware dos consoles PlayStation (do PS1 ao PS5 Pro), construída em <strong>React, TypeScript e CSS Modules</strong> com orquestração de scroll via <strong>Intersection Observer API</strong> (<code>rootMargin: "-50%"</code>), eliminando listeners bloqueantes na thread principal.</li>
          <li>Implementa contadores numéricos animados sob demanda (<code>StatsAnimated</code>), transições declarativas a <strong>60 FPS estáveis com Framer Motion</strong> sem layout thrashing, navegação lateral adaptativa (<code>SideTimeline</code>) e deploy contínuo (CI/CD) via GitHub e Vercel.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação Lato Sensu - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES &amp; FORMAÇÃO COMPLEMENTAR</h2>
      <ul class="cert-list">
        <li><strong>Desenvolvimento Front-End com Inteligência Artificial (80 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (TypeScript, Angular, Java) (132 h)</strong> - DIO</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Formação em Língua Inglesa (Programa Completo)</strong> - Wizard by Pearson</li>
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
        Front-End and Mobile Software Engineer specializing in <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong> and <strong>React Native (Expo)</strong>, with hands-on experience in <strong>RESTful APIs</strong>, <strong>Java (Spring Boot)</strong>, <strong>C#/.NET</strong> and <strong>PostgreSQL</strong>. Experienced in developing responsive web and mobile applications, offline-first architectures, secure authentication flows (OAuth 2.0/OIDC, JWT, Keycloak), web accessibility (WCAG 2.1 AA/AAA) and automated testing (Vitest, Jest, Playwright and Cypress). Completed over 910 hours of hands-on software development training through Serratec and UECE, and hold a postgraduate degree in Software Engineering. Advanced English (B2+). Open to remote opportunities in Brazil and internationally.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS AI Recommendation Platform:</span> Corporate MVP built with an 11-person team for ZEISS, developing the React and TypeScript frontend for assisted OCR prescription validation, AI-driven lens recommendations (n8n/RAG) and real-time analytics dashboards.
        </div>
        <div class="ach-item">
          <span class="ach-label">Work-Fitness &amp; Portfolio (Production Applications):</span> Commercial freelance platform (TypeScript, Clean Architecture, Docker/Nginx, 217 automated tests) and interactive portfolio (Angular Signals, WebGL/Three.js, 213 automated tests), both scoring 100/100 across all four Google Lighthouse categories.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow Mobile (Offline-First React Native):</span> Precision agri-tech mobile application in React Native (Expo) with an offline-first FIFO mutation queue, MAPA spray records with canvas SHA-256 digital signatures, OIDC biometric login and 138 tests across 26 Jest suites.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Languages:</span> TypeScript | JavaScript (ES6+) | HTML5 | CSS3 / SCSS | SQL</div>
        <div class="sk-row"><span class="sk-label">Frontend Web:</span> React | Angular (Signals, Standalone, OnPush, PWA) | Three.js / WebGL | Framer Motion | Styled Components | Vite</div>
        <div class="sk-row"><span class="sk-label">Mobile &amp; UI/UX:</span> React Native (Expo, Offline-First) | React Navigation | React Hook Form | Zod | Accessibility (WCAG 2.1 AA/AAA &amp; VLibras)</div>
        <div class="sk-row"><span class="sk-label">Testing &amp; Quality:</span> Vitest | Jest | Playwright (E2E) | Cypress | Axe-Core | Google Lighthouse</div>
        <div class="sk-row"><span class="sk-label">API &amp; Backend Integration:</span> RESTful APIs | OAuth 2.0 / OIDC (Keycloak) &amp; JWT | Java (Spring Boot) | C# (.NET) | PostgreSQL</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Architecture:</span> Docker | Nginx | CI/CD (GitHub Actions, Vercel) | Git | Clean Architecture | Agile / Scrum</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Full-Stack Freelance Developer — Work-Fitness</div>
        <div class="entry-meta">Independent Client | 2025 - Present | Remote</div>
        <ul class="bullets">
          <li>End-to-end development and maintenance of a commercial platform deployed in production (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), responsible for Clean Architecture, <strong>TypeScript</strong> implementation, web accessibility (WCAG 2.1 AA and VLibras) and containerized deployment with <strong>Docker and Nginx</strong>.</li>
          <li>Built a body assessment engine, UTM-preserved WhatsApp lead qualification flow and analytics telemetry (GA4, GTM and Meta Pixel), backed by <strong>217 automated tests (Vitest and Playwright)</strong> and 100/100 scores across all four Google Lighthouse categories.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Programming Instructor</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students covering programming logic with <strong>JavaScript</strong>, relational databases with DBeaver and PostgreSQL, OOP in Java and <strong>RESTful APIs with Spring Boot</strong>, culminating in an integrated project.</li>
          <li>Created all teaching materials (exercise guides, summaries, tutorials and support resources) from the institution's syllabus, providing one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Front-End &amp; Full-Stack Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petrópolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a 790-hour intensive software residency with strong focus on <strong>Web Frontend (React, TypeScript, HTML5/CSS3)</strong> and <strong>Mobile (React Native with Expo)</strong> integrated with Spring Boot RESTful APIs, culminating in a corporate MVP delivered under contract in partnership with <strong>ZEISS</strong>.</li>
          <li>Delivered practical applications at the end of each track, building responsive interfaces, schema-validated forms (Zod), state management flows and asynchronous API integrations in an Agile team (Scrum, Git and code reviews).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Logistics Operations Agent</div>
        <div class="entry-meta">Fri On Line | Feb 2025 - May 2025 | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Managed operational schedules for field technicians, monitoring SLA compliance and ensuring on-time service delivery across regional routes.</li>
          <li>Provided Tier-1 operational support, resolving scheduling conflicts and handling direct communication with commercial clients.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React | TypeScript | Vite | Styled Components | React Router | ApexCharts | Java | Spring Boot | OCR &amp; RAG (n8n) - Serratec Final Project · Corporate MVP (Contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses manually, making recommendations inconsistent. The team built a web platform with a <strong>React, TypeScript and Styled Components front end</strong> (connected to a Java/Spring Boot back end and an n8n/RAG AI pipeline) featuring an assisted Human-in-the-Loop validation modal with field-level OCR confidence scores and matching optical parameters with patient lifestyle habits to recommend the ideal ZEISS lens.</li>
          <li>Built <strong>interactive analytics dashboards with ApexCharts</strong> for store managers and ZEISS headquarters (best-selling and most recommended lenses, temporal trends, conversion rates and seller rankings). Role-based UI route protection backed by a three-tier JWT hierarchy (ZEISS admin, store manager, employee), consultation lifecycle state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) and full CRUD views for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Offline-First Mobile App - <a href="https://github.com/DevYuriVieira/farmflow-mobile">github.com/DevYuriVieira/farmflow-mobile</a></div>
        <div class="entry-meta">Personal | 2026 | React Native | Expo | TypeScript | Offline-First Architecture | Keycloak OIDC | Jest | Java / Spring Boot API</div>
        <ul class="bullets">
          <li>Mobile application for field operators working without connectivity: a <strong>transactional FIFO mutation queue</strong> persisted locally in AsyncStorage with deterministic reconciliation on reconnect, ensuring zero lost spray records.</li>
          <li>MAPA-mandated spray records with a <strong>canvas-drawn digital signature hashed with SHA-256</strong> and biometric login with Keycloak OIDC, integrated with a Java / Spring Boot backend sustaining <strong>2,450 requests per second (req/s)</strong> in k6 load tests (controlled benchmark environment).</li>
          <li>Covered by <strong>138 automated tests across 26 Jest suites</strong> on the mobile client, within a 549-test suite spanning mobile and backend.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Commercial Platform - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (Real Client) | 2025 - Present | TypeScript | Vite | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | Deployed in production</div>
        <ul class="bullets">
          <li>Engineered a body assessment engine (WHO BMI, Deurenberg body fat percentage and Mifflin-St Jeor BMR) isolated in a <strong>DOM-free Clean Architecture core</strong>, routing qualified leads with preserved UTM parameters directly into WhatsApp (32 kB bundle and a <strong>100/100 score across all four Google Lighthouse categories</strong>).</li>
          <li>Treated accessibility as a core engineering requirement (WCAG 2.1 AA, VLibras widget with zero layout shift, bionic reading and colorblind filters), verified by <strong>170 Vitest unit tests and 47 Playwright E2E specs across 26 viewports</strong>, deployed in a multi-stage Docker container with Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Deployed in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular</strong> standalone components, <strong>native Signals (<code>signal/computed</code>)</strong> and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as an offline-ready PWA with a service worker.</li>
          <li>Covered by <strong>213 automated tests</strong> across three layers (158 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core and 17 Cypress E2E specs), trilingual i18n (PT/EN/ES) and a 100/100 score across all four Google Lighthouse categories on desktop.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://github.com/DevYuriVieira/playstation-evolution-timeline">github.com/DevYuriVieira/playstation-evolution-timeline</a> · <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | React | TypeScript | Vite | Framer Motion | CSS Modules | Intersection Observer | Deployed in production</div>
        <ul class="bullets">
          <li>Web application deployed in production showcasing 30 years of PlayStation console hardware evolution (PS1 to PS5 Pro), engineered with modular <strong>React, TypeScript and CSS Modules</strong> components and viewport-centered scroll orchestration via the <strong>Intersection Observer API</strong> (<code>rootMargin: "-50%"</code>), eliminating main-thread scroll listeners.</li>
          <li>Implements visibility-triggered numeric counters (<code>StatsAnimated</code>) and hardware-accelerated <strong>60 FPS animations using Framer Motion</strong> without layout thrashing, an adaptive <code>SideTimeline</code> navigation bar and automated CI/CD via GitHub and Vercel.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree in Software Engineering</div>
        <div class="edu-meta">Estácio University | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">State University of Ceará (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree in Industrial Engineering</div>
        <div class="edu-meta">Estácio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS &amp; ADDITIONAL TRAINING</h2>
      <ul class="cert-list">
        <li><strong>Front-End Development with Artificial Intelligence (80 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (TypeScript, Angular, Java) (132 h)</strong> - DIO</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>English Language Programme (Completed)</strong> - Wizard by Pearson</li>
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
  <title>Yuri Vieira Teixeira - Engenheiro de Software Back-End</title>
  <style>${EXACT_ORIGINAL_STYLES}</style>
</head>
<body>
  <header class="header">
    <div class="header__name">Yuri Vieira Teixeira</div>
    <div class="header__subtitle">Engenheiro de Software Back-End | Java (Spring Boot) | C# / .NET | PostgreSQL</div>
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
        Engenheiro de Software Back-End especializado em <strong>Java (Spring Boot)</strong> e <strong>C#/.NET (ASP.NET Core)</strong>, com experiência prática em <strong>Python (Django)</strong>, <strong>TypeScript</strong>, <strong>APIs RESTful</strong>, <strong>RabbitMQ</strong> e <strong>PostgreSQL</strong>. Experiência no desenvolvimento de sistemas distribuídos, arquiteturas orientadas a eventos, segurança de APIs (OAuth 2.0/OIDC, JWT, Keycloak, Spring Security), padrões de mensageria transacional e testes automatizados (JUnit, xUnit e k6). Concluiu mais de 910 horas de formação prática em desenvolvimento de software pelo Serratec e UECE, e possui pós-graduação em Engenharia de Software. Inglês Avançado (B2+). Disponível para oportunidades remotas no Brasil e no exterior.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS — Plataforma de Recomendação com IA:</span> MVP corporativo construído com um time de 11 pessoas para a ZEISS, integrando APIs REST em Java e Spring Boot, WebFlux, PostgreSQL, controle de acesso JWT em três níveis e pipeline de OCR + IA (n8n/RAG).
        </div>
        <div class="ach-item">
          <span class="ach-label">FleetOps API (.NET &amp; RabbitMQ):</span> Arquitetura distribuída em C# e .NET com Clean Architecture, DDD, Transactional Outbox, RabbitMQ, Keycloak OIDC, PostgreSQL, 300 testes automatizados em xUnit e 278 requisições por segundo (req/s) sustentadas sob escritas ACID no k6.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow Backend (Java &amp; Virtual Threads):</span> Motor distribuído em Java e Spring Boot sustentando 2.450 req/s em benchmark k6 com zero erros 5xx, Transactional Outbox sobre RabbitMQ, PostgreSQL particionado com Row-Level Security fail-closed e 411 testes automatizados.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Linguagens:</span> Java | C# | SQL | Python | TypeScript</div>
        <div class="sk-row"><span class="sk-label">Frameworks Backend:</span> Spring Boot | Spring Security | ASP.NET Core (.NET) | Django | JPA / Hibernate | Entity Framework Core | JDBC</div>
        <div class="sk-row"><span class="sk-label">Mensageria &amp; Segurança:</span> RabbitMQ | Transactional Outbox | OAuth 2.0 / OIDC (Keycloak) | JWT &amp; RBAC</div>
        <div class="sk-row"><span class="sk-label">Banco de Dados:</span> PostgreSQL | MySQL | Modelagem Relacional (3FN) | Particionamento &amp; Indexação | Transações ACID</div>
        <div class="sk-row"><span class="sk-label">Testes &amp; Observabilidade:</span> JUnit | xUnit | k6 (Testes de Carga) | OpenTelemetry &amp; Jaeger | Vitest | Playwright</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Arquitetura:</span> Docker | CI/CD (GitHub Actions) | Git | Linux / Nginx | Swagger / OpenAPI | Clean Architecture | DDD | SOLID</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack Freelance — Work-Fitness</div>
        <div class="entry-meta">Cliente Independente | 2025 - Atual | Remoto</div>
        <ul class="bullets">
          <li>Desenvolvimento e manutenção de plataforma comercial em produção (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), com responsabilidade pela arquitetura (Clean Architecture), regras de negócio em <strong>TypeScript</strong>, suíte de <strong>217 testes automatizados</strong> e infraestrutura em contêiner <strong>Docker multi-stage com Nginx</strong>.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação Back-End (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos em Programação Back-End cobrindo lógica de programação, banco de dados relacional com <strong>DBeaver e PostgreSQL</strong>, <strong>POO em Java</strong> e desenvolvimento de <strong>APIs RESTful com Spring Boot</strong>, culminando em um projeto integrado.</li>
          <li>Elaborei todo o material didático (apostilas de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, prestando suporte individualizado aos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack / Back-End (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí formação intensiva de 790 horas com forte foco em <strong>Banco de Dados PostgreSQL</strong>, <strong>POO em Java</strong> e <strong>APIs RESTful com Spring Boot e Spring Security</strong>, culminando em um MVP corporativo entregue sob contrato em parceria com a <strong>ZEISS</strong>.</li>
          <li>Projetei e implementei arquiteturas em camadas (Controller, Service, Repository, DAO, DTOs), modelagem relacional 3FN, autenticação JWT/RBAC e integrações de serviços em equipe Ágil (Scrum, Git e Code Review).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo o cumprimento dos cronogramas de atendimento e suporte operacional Nível 1.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - Plataforma de Recomendação com IA</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | Java | Spring Boot | Spring WebFlux | PostgreSQL | JWT (RBAC) | n8n (OCR &amp; RAG) | OpenAPI - Projeto Final Serratec · MVP Corporativo (Contrato)</div>
        <ul class="bullets">
          <li>API REST corporativa em <strong>Java, Spring Boot e PostgreSQL</strong> com streaming não-bloqueante via <strong>Spring WebFlux <code>WebClient</code></strong> para pipeline de OCR e IA (n8n/RAG), cálculo de score de confiabilidade da receita extraída e recomendação automatizada de lentes ZEISS.</li>
          <li>Autenticação stateless JWT com RBAC em três níveis (admin ZEISS, gerente e funcionário), auditoria de sessões por IP, máquina de estados comercial (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) e CRUD completo documentado com Swagger / OpenAPI.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Pessoal | 2026 | C# | .NET | ASP.NET Core | PostgreSQL | Entity Framework Core | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Motor back-end distribuído e orientado a eventos em <strong>C# e .NET</strong> para gestão de frotas e logística (27 endpoints REST em 5 contextos delimitados DDD: Veículos, Motoristas, Entregas, Rotas e Manutenção) com Clean Architecture, operando como Resource Server OAuth 2.0 / OIDC com <strong>Keycloak (RS256/JWKS)</strong> e RBAC para quatro papéis.</li>
          <li>Implementa <strong>Transactional Outbox</strong> integrado ao DbContext eliminando dual-write hazard, concorrência otimista via <code>xmin</code> do PostgreSQL, polling concorrente via <code>FOR UPDATE SKIP LOCKED</code>, mensageria com <strong>RabbitMQ</strong> (Publisher Confirms, filas TTL de retry e Dead-Letter Queue), consumidor idempotente por <code>MessageId</code> e tracing distribuído com OpenTelemetry e Jaeger.</li>
          <li>Suíte de <strong>300 testes automatizados</strong> (166 unitários e 134 de integração e injeção de falhas) em xUnit com 100% de aprovação e throughput validado de <strong>278 req/s sustentados sob cargas de escrita ACID</strong> em testes k6 (ambiente de benchmark controlado).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Plataforma Agro Distribuída (Java) - <a href="https://github.com/DevYuriVieira/farmflow-backend">github.com/DevYuriVieira/farmflow-backend</a></div>
        <div class="entry-meta">Pessoal | 2026 | Java | Spring Boot | Virtual Threads | PostgreSQL | RabbitMQ | Keycloak OIDC | OpenTelemetry | k6</div>
        <ul class="bullets">
          <li>Motor distribuído em <strong>Java com Virtual Threads e Spring Boot</strong> sustentando <strong>2.450 req/s</strong> em testes de carga k6 (ambiente de benchmark controlado) com zero erros 5xx, arquitetado para telemetria IoT de pivôs/silos e conformidade regulatória com o MAPA.</li>
          <li>Garantia de consistência sem dual-write: <strong>Transactional Outbox</strong> sobre RabbitMQ (CloudEvents, Publisher Confirms, DLQ), polling concorrente com <code>FOR UPDATE SKIP LOCKED</code>, sagas coreografadas com locks consultivos (<code>pg_try_advisory_xact_lock</code>) e tracing distribuído ponta a ponta com OpenTelemetry.</li>
          <li>Engenharia de dados e segurança: <strong>PostgreSQL</strong> com particionamento temporal declarativo, índices BRIN e <strong>Row-Level Security fail-closed</strong>; Keycloak OIDC com proteção contra enumeração IDOR (404) e <strong>411 testes automatizados no backend</strong> (549 na plataforma completa) sob 100 Virtual Threads.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Colaborativo (5 devs - Residência Serratec) | 2026 | Java | Spring Boot | Spring Security | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI</div>
        <ul class="bullets">
          <li>API RESTful desenvolvida em equipe em <strong>Java e Spring Boot</strong> estruturada em camadas desacopladas (Controller, Service, Repository, DTOs), gerenciando ciclo de pedidos com relacionamento N:N, totalização dinâmica de itens e controle concorrente de estoque.</li>
          <li>Segurança na cadeia de filtros do <strong>Spring Security (JWT / RBAC)</strong>, integração com ViaCEP para autopreenchimento de endereços, disparo de e-mails transacionais via JavaMail, tratamento global com <code>@ControllerAdvice</code> e documentação via Swagger UI / OpenAPI.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Sistema de Folha de Pagamento &amp; Clínica Odontológica (DCMS) - <a href="https://github.com/DevYuriVieira/payroll-system-java"> Folha (Java/JDBC)</a> · <a href="https://github.com/DevYuriVieira/dentacare-management-system">DCMS (PostgreSQL)</a></div>
        <div class="entry-meta">Colaborativo (Residência Serratec) | 2026 | Java | JDBC | PostgreSQL | Modelagem 3FN | Arquitetura MVC &amp; DAO | BigDecimal</div>
        <ul class="bullets">
          <li><strong>Folha de Pagamento:</strong> Processamento em lote via CSV e cálculo progressivo de INSS e IRRF com precisão monetária exata (<code>BigDecimal HALF_UP</code>), persistência em <strong>JDBC puro no PostgreSQL</strong> (arquitetura MVC + DAO e padrão Singleton) e exceções customizadas de domínio.</li>
          <li><strong>DCMS:</strong> Banco relacional transacional em <strong>PostgreSQL normalizado até a 3ª Forma Normal (3FN)</strong> com constraints DDL estritas, integridade referencial, indexação B-Tree e queries analíticas de faturamento.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação Lato Sensu - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES &amp; FORMAÇÃO COMPLEMENTAR</h2>
      <ul class="cert-list">
        <li><strong>Programação em Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, SQL) (132 h)</strong> - DIO</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Formação em Língua Inglesa (Programa Completo)</strong> - Wizard by Pearson</li>
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
    <div class="header__subtitle">Back-End Software Engineer | Java (Spring Boot) | C# / .NET | PostgreSQL</div>
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
        Back-End Software Engineer specializing in <strong>Java (Spring Boot)</strong> and <strong>C#/.NET (ASP.NET Core)</strong>, with hands-on experience in <strong>Python (Django)</strong>, <strong>TypeScript</strong>, <strong>RESTful APIs</strong>, <strong>RabbitMQ</strong> and <strong>PostgreSQL</strong>. Experienced in developing distributed systems, event-driven architectures, secure APIs (OAuth 2.0/OIDC, JWT, Keycloak, Spring Security), transactional messaging patterns and automated testing (JUnit, xUnit and k6). Completed over 910 hours of hands-on software development training through Serratec and UECE, and hold a postgraduate degree in Software Engineering. Advanced English (B2+). Open to remote opportunities in Brazil and internationally.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS AI Recommendation Platform:</span> Corporate MVP built with an 11-person team for ZEISS, integrating Java and Spring Boot REST APIs, WebFlux, PostgreSQL, three-tier JWT role-based access control and an OCR + AI pipeline (n8n/RAG).
        </div>
        <div class="ach-item">
          <span class="ach-label">FleetOps API (.NET &amp; RabbitMQ):</span> Distributed architecture in C# and .NET with Clean Architecture, DDD, Transactional Outbox, RabbitMQ, Keycloak OIDC, PostgreSQL, 300 automated xUnit tests and 278 sustained requests per second (req/s) under ACID write workloads in k6.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow Backend (Java &amp; Virtual Threads):</span> Distributed engine in Java and Spring Boot sustaining 2,450 req/s in k6 benchmarks with zero 5xx errors, Transactional Outbox over RabbitMQ, time-series partitioned PostgreSQL with fail-closed Row-Level Security and 411 automated tests.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Languages:</span> Java | C# | SQL | Python | TypeScript</div>
        <div class="sk-row"><span class="sk-label">Backend Frameworks:</span> Spring Boot | Spring Security | ASP.NET Core (.NET) | Django | JPA / Hibernate | Entity Framework Core | JDBC</div>
        <div class="sk-row"><span class="sk-label">Messaging &amp; Security:</span> RabbitMQ | Transactional Outbox | OAuth 2.0 / OIDC (Keycloak) | JWT &amp; RBAC</div>
        <div class="sk-row"><span class="sk-label">Databases:</span> PostgreSQL | MySQL | Relational Modeling (3NF) | Partitioning &amp; Indexing | ACID Transactions</div>
        <div class="sk-row"><span class="sk-label">Testing &amp; Observability:</span> JUnit | xUnit | k6 (Load Testing) | OpenTelemetry &amp; Jaeger | Vitest | Playwright</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Architecture:</span> Docker | CI/CD (GitHub Actions) | Git | Linux / Nginx | Swagger / OpenAPI | Clean Architecture | DDD | SOLID</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Full-Stack Freelance Developer — Work-Fitness</div>
        <div class="entry-meta">Independent Client | 2025 - Present | Remote</div>
        <ul class="bullets">
          <li>End-to-end development and maintenance of a commercial platform deployed in production (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), responsible for Clean Architecture, domain logic in <strong>TypeScript</strong>, <strong>217 automated tests</strong> and multi-stage <strong>Docker and Nginx</strong> deployment.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Back-End Programming Instructor (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students in Back-End Programming covering programming logic, relational databases with <strong>DBeaver and PostgreSQL</strong>, <strong>OOP in Java</strong> and <strong>RESTful APIs with Spring Boot</strong>, culminating in an integrated project.</li>
          <li>Created all teaching materials (exercise guides, summaries, tutorials and support resources) from the institution's syllabus, providing one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Full-Stack / Back-End Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petrópolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a 790-hour intensive software residency with strong focus on <strong>PostgreSQL Databases</strong>, <strong>OOP in Java</strong> and <strong>RESTful APIs with Spring Boot and Spring Security</strong>, culminating in a corporate MVP delivered under contract in partnership with <strong>ZEISS</strong>.</li>
          <li>Designed and implemented layered backend architectures (Controller, Service, Repository, DAO, DTOs), 3NF relational schemas, JWT/RBAC authentication and API integrations in an Agile team (Scrum, Git and code reviews).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Logistics Operations Agent</div>
        <div class="entry-meta">Fri On Line | Feb 2025 - May 2025 | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Managed operational schedules for field technicians, monitoring SLA compliance, resolving scheduling conflicts and providing Tier-1 operational support for commercial clients.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | Java | Spring Boot | Spring WebFlux | PostgreSQL | JWT (RBAC) | n8n (OCR &amp; RAG) | OpenAPI - Serratec Final Project · Corporate MVP (Contract)</div>
        <ul class="bullets">
          <li>Enterprise REST API in <strong>Java, Spring Boot and PostgreSQL</strong> featuring non-blocking prescription streaming via <strong>Spring WebFlux <code>WebClient</code></strong> to an OCR and AI pipeline (n8n/RAG), extraction confidence scoring and automated ZEISS lens recommendation.</li>
          <li>Stateless JWT authentication with three-tier RBAC (ZEISS admin, store manager, employee), session IP auditing, commercial sales state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) and full CRUD documented via Swagger / OpenAPI.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Personal | 2026 | C# | .NET | ASP.NET Core | PostgreSQL | Entity Framework Core | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Distributed, event-driven fleet and logistics REST API engine in <strong>C# and .NET</strong> (27 endpoints across 5 DDD Bounded Contexts: Vehicles, Drivers, Deliveries, Routes and Maintenance) with Clean Architecture, operating as an OAuth 2.0 / OIDC Resource Server with <strong>Keycloak (RS256/JWKS)</strong> and RBAC across four roles.</li>
          <li>Implements <strong>Transactional Outbox</strong> integrated into DbContext eliminating dual-write hazards, optimistic concurrency via PostgreSQL <code>xmin</code>, concurrent polling via <code>FOR UPDATE SKIP LOCKED</code>, <strong>RabbitMQ</strong> messaging (Publisher Confirms, TTL retry queues and Dead-Letter Queue), idempotent consumer by <code>MessageId</code> and distributed tracing with OpenTelemetry and Jaeger.</li>
          <li>Suite of <strong>300 automated tests</strong> (166 unit and 134 integration, concurrency and fault-injection) in xUnit with 100% pass rate and validated throughput of <strong>278 sustained req/s under ACID write workloads</strong> in k6 load tests (controlled benchmark environment).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Distributed Agri-Tech Platform (Java) - <a href="https://github.com/DevYuriVieira/farmflow-backend">github.com/DevYuriVieira/farmflow-backend</a></div>
        <div class="entry-meta">Personal | 2026 | Java | Spring Boot | Virtual Threads | PostgreSQL | RabbitMQ | Keycloak OIDC | OpenTelemetry | k6</div>
        <ul class="bullets">
          <li>Distributed platform engineered for critical agro-industrial operations: <strong>Java with Virtual Threads and Spring Boot</strong> backend sustaining <strong>2,450 req/s</strong> in k6 load tests (controlled benchmark environment) with zero 5xx errors, built for IoT pivot/silo telemetry and MAPA regulatory compliance.</li>
          <li>Consistency without dual-writes: <strong>Transactional Outbox</strong> over RabbitMQ (CloudEvents, Publisher Confirms, DLQ), concurrent polling via <code>FOR UPDATE SKIP LOCKED</code>, choreographed sagas with advisory locks (<code>pg_try_advisory_xact_lock</code>) and end-to-end distributed tracing with OpenTelemetry.</li>
          <li>Data and security architecture: <strong>PostgreSQL</strong> with declarative time-series partitioning, BRIN indexes and <strong>fail-closed Row-Level Security</strong>; Keycloak OIDC with IDOR enumeration protection (404 instead of 403) and <strong>411 automated backend tests</strong> (549 across the full platform) executing under 100 Virtual Threads.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Collaborative (5 devs - Serratec Residency) | 2026 | Java | Spring Boot | Spring Security | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI</div>
        <ul class="bullets">
          <li>Team-developed RESTful API in <strong>Java and Spring Boot</strong> structured in decoupled layers (Controller, Service, Repository, DTOs), managing order lifecycles with N:N mappings, dynamic item totalization and concurrent inventory control.</li>
          <li>Security via <strong>Spring Security filter chain (stateless JWT / RBAC)</strong>, external ViaCEP API integration for automatic address resolution, transactional email notifications with JavaMail, global exception handling (<code>@ControllerAdvice</code>) and OpenAPI / Swagger UI contracts.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Payroll System &amp; Dental Clinic Management (DCMS) - <a href="https://github.com/DevYuriVieira/payroll-system-java">Payroll (Java/JDBC)</a> · <a href="https://github.com/DevYuriVieira/dentacare-management-system">DCMS (PostgreSQL)</a></div>
        <div class="entry-meta">Collaborative (Serratec Residency) | 2026 | Java | JDBC | PostgreSQL | 3NF Modeling | MVC &amp; DAO Architecture | BigDecimal</div>
        <ul class="bullets">
          <li><strong>Payroll System:</strong> Batch CSV processing and progressive INSS and IRRF tax calculations with exact monetary precision (<code>BigDecimal HALF_UP</code>), persisting through <strong>raw JDBC on PostgreSQL</strong> in a layered MVC + DAO architecture with custom domain exceptions.</li>
          <li><strong>DCMS:</strong> Transactional relational database in <strong>PostgreSQL strictly normalized up to 3rd Normal Form (3NF)</strong> with DDL constraints, referential integrity, B-Tree indexes and analytical SQL queries for operational and revenue reporting.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree in Software Engineering</div>
        <div class="edu-meta">Estácio University | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">State University of Ceará (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree in Industrial Engineering</div>
        <div class="edu-meta">Estácio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS &amp; ADDITIONAL TRAINING</h2>
      <ul class="cert-list">
        <li><strong>Programming in Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, SQL) (132 h)</strong> - DIO</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>English Language Programme (Completed)</strong> - Wizard by Pearson</li>
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
// 5. FULL-STACK CV — PORTUGUESE
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
    <div class="header__subtitle">Engenheiro de Software Full-Stack | Java (Spring Boot) | C# / .NET | TypeScript (React &amp; Angular)</div>
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
        Engenheiro de Software Full-Stack especializado em <strong>Java (Spring Boot)</strong>, <strong>C#/.NET (ASP.NET Core)</strong> e <strong>TypeScript (React, Angular e React Native)</strong>, com experiência prática em <strong>Python (Django)</strong>, <strong>APIs RESTful</strong>, <strong>RabbitMQ</strong> e <strong>PostgreSQL</strong>. Experiência no desenvolvimento de aplicações web e mobile, sistemas distribuídos, APIs seguras, arquiteturas orientadas a eventos e testes automatizados, com atuação prática em OAuth 2.0/OIDC, JWT, Keycloak, padrões de mensageria transacional e integrações com IA. Concluiu mais de 910 horas de formação prática em desenvolvimento de software pelo Serratec e UECE, e possui pós-graduação em Engenharia de Software. Inglês Avançado (B2+). Disponível para oportunidades remotas no Brasil e no exterior.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS — Plataforma de Recomendação com IA:</span> MVP corporativo full-stack construído com um time de 11 pessoas para a ZEISS (React, TypeScript e Java/Spring Boot), substituindo a leitura manual de receitas por OCR + IA (n8n/RAG) e dashboards analíticos em tempo real.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow &amp; FleetOps (Sistemas Distribuídos):</span> Arquiteturas orientadas a eventos com Transactional Outbox, RabbitMQ, Keycloak OIDC e PostgreSQL: FarmFlow (Java Virtual Threads + React Native Offline-First, 2.450 requisições por segundo (req/s), 549 testes) e FleetOps (C#/.NET, 278 req/s sustentados sob escritas ACID, 300 testes).
        </div>
        <div class="ach-item">
          <span class="ach-label">Work-Fitness &amp; Portfólio (Aplicações em Produção):</span> Plataforma comercial freelance (TypeScript, Clean Architecture, Docker/Nginx, 217 testes automatizados) e portfólio interativo (Angular Signals, WebGL/Three.js, 213 testes automatizados), ambos com nota 100/100 nas quatro categorias do Google Lighthouse.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Linguagens:</span> Java | C# | TypeScript | JavaScript (ES6+) | Python | SQL</div>
        <div class="sk-row"><span class="sk-label">Frontend &amp; Mobile:</span> React | Angular (Signals, Standalone, OnPush, PWA) | React Native (Expo) | Three.js / WebGL | HTML5 / SCSS | WCAG 2.1 AA/AAA</div>
        <div class="sk-row"><span class="sk-label">Backend &amp; Mensageria:</span> Spring Boot | Spring Security | ASP.NET Core (.NET) | Django | RabbitMQ | JPA / Hibernate | Entity Framework Core | OAuth 2.0 / OIDC (Keycloak) &amp; JWT</div>
        <div class="sk-row"><span class="sk-label">Banco de Dados:</span> PostgreSQL | MySQL | Modelagem Relacional (3FN) | Particionamento &amp; Indexação | Transações ACID</div>
        <div class="sk-row"><span class="sk-label">Testes &amp; Observabilidade:</span> JUnit | xUnit | Vitest | Jest | Playwright (E2E) | Cypress | k6 (Testes de Carga) | OpenTelemetry &amp; Jaeger</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Arquitetura:</span> Docker | Nginx | CI/CD (GitHub Actions, Vercel) | Git | Swagger / OpenAPI | Clean Architecture | DDD | SOLID | Agile / Scrum</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EXPERIÊNCIA PROFISSIONAL</h2>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack Freelance — Work-Fitness</div>
        <div class="entry-meta">Cliente Independente | 2025 - Atual | Remoto</div>
        <ul class="bullets">
          <li>Desenvolvimento e manutenção de plataforma comercial em produção (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), com responsabilidade ponta a ponta pela arquitetura (Clean Architecture), implementação em <strong>TypeScript</strong>, acessibilidade (WCAG 2.1 AA e VLibras) e implantação em <strong>Docker e Nginx</strong>.</li>
          <li>Implementação de motor de avaliação corporal, qualificação de leads com rastreamento UTM integrado ao WhatsApp e telemetria (GA4, GTM e Meta Pixel), mantendo <strong>217 testes automatizados (Vitest e Playwright)</strong> e nota 100/100 nas quatro categorias do Google Lighthouse.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Instrutor de Programação Back-End (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Ago 2026 - Out 2026 (Contrato) | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Lecionei turma de 10 alunos em Programação Back-End cobrindo lógica de programação (JavaScript), banco de dados relacional com DBeaver e PostgreSQL, <strong>POO em Java</strong> e <strong>APIs RESTful com Spring Boot</strong>, culminando em um projeto integrado.</li>
          <li>Elaborei todo o material didático (apostilas de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, prestando suporte individualizado aos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí residência intensiva em trilhas progressivas: lógica, banco de dados PostgreSQL, <strong>POO em Java</strong>, frontend, <strong>APIs RESTful com Spring Boot</strong>, <strong>React e React Native</strong>, culminando em um projeto final full-stack entregue como MVP corporativo sob contrato em parceria com a <strong>ZEISS</strong>.</li>
          <li>Desenvolvi projetos práticos em equipe Ágil (Scrum, Git e Code Review) ao final de cada módulo, da modelagem relacional 3FN a interfaces responsivas e integrações via API, aplicando POO, SOLID e boas práticas de engenharia.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Agente de Operações Logísticas</div>
        <div class="entry-meta">Fri On Line | Fev 2025 - Mai 2025 | Nova Friburgo, RJ</div>
        <ul class="bullets">
          <li>Gerenciei agenda operacional de técnicos de campo, acompanhando SLAs e garantindo o cumprimento dos cronogramas de atendimento.</li>
          <li>Realizei suporte operacional Nível 1, atuando na resolução de conflitos de agenda e comunicação direta com clientes corporativos.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - Plataforma de Recomendação com IA</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React | TypeScript | Styled Components | ApexCharts | Java | Spring Boot | PostgreSQL | JWT | n8n (OCR &amp; RAG) - Projeto Final Serratec · MVP Corporativo (Contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web full-stack (<strong>front-end em React, TypeScript e Styled Components; back-end em Java, Spring Boot e PostgreSQL</strong>) que transmite receitas via streaming WebFlux para um pipeline de OCR e IA (n8n/RAG), exibe validação assistida com score de confiança e cruza dioptrias e estilo de vida para sugerir a lente ZEISS adequada.</li>
          <li>Painel gerencial interativo com <strong>ApexCharts</strong> acompanhando conversão, evolução temporal e ranking para gerentes e matriz da ZEISS. Autenticação stateless JWT com RBAC em três níveis (admin ZEISS, gerente e funcionário), máquina de estados comercial (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>), auditoria de acessos por IP e CRUD completo de lojas, produtos e funcionários.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Pessoal | 2026 | C# | .NET | ASP.NET Core | PostgreSQL | Entity Framework Core | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Motor back-end distribuído e orientado a eventos em <strong>C# e .NET</strong> para gestão de frotas e logística (27 endpoints REST em 5 contextos delimitados DDD) com Clean Architecture, operando como Resource Server OAuth 2.0 / OIDC com <strong>Keycloak (RS256/JWKS)</strong> e RBAC para quatro papéis.</li>
          <li>Implementa <strong>Transactional Outbox</strong> com publicação em <strong>RabbitMQ</strong> (Publisher Confirms, filas de retry com TTL e Dead-Letter Queue), consumidor idempotente por <code>MessageId</code>, concorrência otimista com <code>xmin</code> do PostgreSQL, polling concorrente via <code>FOR UPDATE SKIP LOCKED</code>, tracing distribuído no Jaeger, <strong>300 testes automatizados</strong> em xUnit e <strong>278 req/s sustentados sob cargas de escrita ACID</strong> em testes k6 (ambiente de benchmark controlado).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Mobile Offline-First + Backend Distribuído - <a href="https://github.com/DevYuriVieira/farmflow-mobile">GitHub (Mobile)</a> · <a href="https://github.com/DevYuriVieira/farmflow-backend">GitHub (Backend)</a></div>
        <div class="entry-meta">Pessoal | 2026 | React Native | Expo | Java | Spring Boot | Virtual Threads | PostgreSQL | RabbitMQ | Keycloak OIDC | OpenTelemetry</div>
        <ul class="bullets">
          <li>Plataforma ponta a ponta para operações agrícolas sem conectividade: aplicativo em <strong>React Native com fila FIFO offline-first</strong> e reconciliação determinística ao reconectar, caderno de defensivos do MAPA com <strong>assinatura digital em canvas e hash SHA-256</strong>, e telemetria IoT de pivôs e silos.</li>
          <li>Backend em <strong>Java com Virtual Threads e Spring Boot</strong> sustentando <strong>2.450 req/s</strong> em testes de carga k6 (ambiente de benchmark controlado) com zero erros 5xx, usando <strong>Transactional Outbox</strong> com RabbitMQ (CloudEvents, DLQ), <code>FOR UPDATE SKIP LOCKED</code>, PostgreSQL com particionamento temporal e <strong>Row-Level Security fail-closed</strong>, e tracing distribuído com OpenTelemetry.</li>
          <li>Qualidade verificável nos dois lados: <strong>549 testes automatizados</strong> (411 no backend e 138 no mobile em 26 suítes Jest), autenticação Keycloak OIDC com biometria no aplicativo e proteção contra enumeração IDOR na API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Plataforma Comercial - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (Cliente Real) | 2025 - Atual | TypeScript | Vite | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | Em produção</div>
        <ul class="bullets">
          <li>Plataforma comercial entregue de ponta a ponta para um personal trainer: motor de avaliação corporal (IMC da OMS, gordura corporal por Deurenberg e TMB por Mifflin-St Jeor) isolado em um <strong>núcleo de Clean Architecture sem DOM</strong> e leads qualificados com UTM preservado direto no WhatsApp. Nota <strong>100/100 nas quatro categorias do Google Lighthouse</strong> com bundle de 32 kB.</li>
          <li>Acessibilidade tratada como requisito (WCAG 2.1 AA, VLibras sem layout shift, leitura biônica e filtros para daltonismo), <strong>170 testes Vitest e 47 specs Playwright em 26 viewports</strong>, telemetria GA4, GTM e Meta Pixel, e deploy em contêiner Docker multi-stage com Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular</strong>, Signals nativos (<code>signal/computed</code>) e <code>OnPush</code> em todos os componentes, incluindo sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, configurado como PWA com service worker.</li>
          <li>Coberto por <strong>213 testes automatizados</strong> em três camadas (158 unitários Vitest, 38 E2E Playwright com auditoria WCAG 2.1 AA/AAA via Axe-Core e 17 E2E Cypress), suporte trilíngue i18n (PT/EN/ES) e nota 100/100 nas quatro categorias do Google Lighthouse no desktop.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">FORMAÇÃO ACADÊMICA</h2>
      <div class="edu-item">
        <div class="edu-title">Pós-Graduação Lato Sensu - Engenharia de Software</div>
        <div class="edu-meta">Universidade Estácio | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Fev 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Residência em TIC 12 (120 h)</div>
        <div class="edu-meta">Universidade Estadual do Ceará (UECE) | Out 2025 - Dez 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bacharelado - Engenharia de Produção</div>
        <div class="edu-meta">Universidade Estácio | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICAÇÕES &amp; FORMAÇÃO COMPLEMENTAR</h2>
      <ul class="cert-list">
        <li><strong>Programação em Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Desenvolvimento Front-End com Inteligência Artificial (80 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, Angular) (132 h)</strong> - DIO</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Formação em Língua Inglesa (Programa Completo)</strong> - Wizard by Pearson</li>
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
// 6. FULL-STACK CV — ENGLISH
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
    <div class="header__subtitle">Full-Stack Software Engineer | Java (Spring Boot) | C# / .NET | TypeScript (React &amp; Angular)</div>
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
        Full-Stack Software Engineer specializing in <strong>Java (Spring Boot)</strong>, <strong>C#/.NET (ASP.NET Core)</strong> and <strong>TypeScript (React, Angular and React Native)</strong>, with hands-on experience in <strong>Python (Django)</strong>, <strong>RESTful APIs</strong>, <strong>RabbitMQ</strong> and <strong>PostgreSQL</strong>. Experienced in developing web and mobile applications, distributed systems, secure APIs, event-driven architectures and automated testing. Practical experience with OAuth 2.0/OIDC, JWT, Keycloak, transactional messaging patterns and AI integrations. Completed over 910 hours of hands-on software development training through Serratec and UECE, and hold a postgraduate degree in Software Engineering. Advanced English (B2+). Open to remote opportunities in Brazil and internationally.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <div class="ach-box">
        <div class="ach-item">
          <span class="ach-label">ZEISS AI Recommendation Platform:</span> Corporate full-stack MVP built with an 11-person team for ZEISS (React, TypeScript and Java/Spring Boot), replacing manual prescription reading with OCR + AI (n8n/RAG) and real-time analytics dashboards.
        </div>
        <div class="ach-item">
          <span class="ach-label">FarmFlow &amp; FleetOps (Distributed Systems):</span> Event-driven architectures with Transactional Outbox, RabbitMQ, Keycloak OIDC and PostgreSQL: FarmFlow (Java Virtual Threads + Offline-First React Native, 2,450 requests per second (req/s), 549 automated tests) and FleetOps (C#/.NET, 278 sustained req/s under ACID write workloads, 300 automated tests).
        </div>
        <div class="ach-item">
          <span class="ach-label">Work-Fitness &amp; Portfolio (Production Applications):</span> Commercial freelance platform (TypeScript, Clean Architecture, Docker/Nginx, 217 automated tests) and interactive portfolio (Angular Signals, WebGL/Three.js, 213 automated tests), both scoring 100/100 across all four Google Lighthouse categories.
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <div class="skills-list">
        <div class="sk-row"><span class="sk-label">Languages:</span> Java | C# | TypeScript | JavaScript (ES6+) | Python | SQL</div>
        <div class="sk-row"><span class="sk-label">Frontend &amp; Mobile:</span> React | Angular (Signals, Standalone, OnPush, PWA) | React Native (Expo) | Three.js / WebGL | HTML5 / SCSS | WCAG 2.1 AA/AAA</div>
        <div class="sk-row"><span class="sk-label">Backend &amp; Messaging:</span> Spring Boot | Spring Security | ASP.NET Core (.NET) | Django | RabbitMQ | JPA / Hibernate | Entity Framework Core | OAuth 2.0 / OIDC (Keycloak) &amp; JWT</div>
        <div class="sk-row"><span class="sk-label">Databases:</span> PostgreSQL | MySQL | Relational Modeling (3NF) | Partitioning &amp; Indexing | ACID Transactions</div>
        <div class="sk-row"><span class="sk-label">Testing &amp; Observability:</span> JUnit | xUnit | Vitest | Jest | Playwright (E2E) | Cypress | k6 (Load Testing) | OpenTelemetry &amp; Jaeger</div>
        <div class="sk-row"><span class="sk-label">DevOps &amp; Architecture:</span> Docker | Nginx | CI/CD (GitHub Actions, Vercel) | Git | Swagger / OpenAPI | Clean Architecture | DDD | SOLID | Agile / Scrum</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

      <div class="entry">
        <div class="entry-title">Full-Stack Freelance Developer — Work-Fitness</div>
        <div class="entry-meta">Independent Client | 2025 - Present | Remote</div>
        <ul class="bullets">
          <li>End-to-end development and maintenance of a commercial platform deployed in production (<a href="https://viniciusantos.vercel.app">viniciusantos.vercel.app</a>), responsible for Clean Architecture, <strong>TypeScript</strong> implementation, web accessibility (WCAG 2.1 AA and VLibras) and containerized deployment with <strong>Docker and Nginx</strong>.</li>
          <li>Built a body assessment engine, UTM-preserved WhatsApp lead qualification flow and analytics telemetry (GA4, GTM and Meta Pixel), backed by <strong>217 automated tests (Vitest and Playwright)</strong> and 100/100 scores across all four Google Lighthouse categories.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Back-End Programming Instructor (Java)</div>
        <div class="entry-meta">SENAI / FAETEC | Aug 2026 - Oct 2026 (Contract) | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Taught a class of 10 students in Back-End Programming covering programming logic (JavaScript), relational databases with DBeaver and PostgreSQL, <strong>OOP in Java</strong> and <strong>RESTful APIs with Spring Boot</strong>, culminating in an integrated project.</li>
          <li>Created all teaching materials (exercise guides, summaries, tutorials and support resources) from the institution's syllabus, providing one-on-one support for students.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Full-Stack Developer (Software Residency)</div>
        <div class="entry-meta">Serratec - TIC/Software Residency | Feb 2026 - Jul 2026 | Petrópolis, Brazil | 790 h</div>
        <ul class="bullets">
          <li>Completed a 790-hour intensive software residency across progressive tracks: logic, PostgreSQL databases, <strong>OOP in Java</strong>, frontend, <strong>RESTful APIs with Spring Boot</strong>, <strong>React and React Native</strong>, culminating in a full-stack final project delivered as a corporate MVP under contract in partnership with <strong>ZEISS</strong>.</li>
          <li>Delivered practical projects in an Agile team (Scrum, Git and code reviews) at the end of each subject, from 3NF data modeling to responsive interfaces and API integrations, applying OOP, SOLID and clean-code standards across all deliverables.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Logistics Operations Agent</div>
        <div class="entry-meta">Fri On Line | Feb 2025 - May 2025 | Nova Friburgo, Brazil</div>
        <ul class="bullets">
          <li>Managed operational schedules for field technicians, monitoring SLA compliance and ensuring on-time service delivery across regional routes.</li>
          <li>Provided Tier-1 operational support, resolving scheduling conflicts and handling direct communication with commercial clients.</li>
        </ul>
      </div>
    </section>

    <section class="section page-break">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">ZEISS - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React | TypeScript | Styled Components | ApexCharts | Java | Spring Boot | PostgreSQL | JWT | n8n (OCR &amp; RAG) - Serratec Final Project · Corporate MVP (Contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses by hand, making recommendations inconsistent. The team built a full-stack web platform (<strong>React, TypeScript and Styled Components front end; Java, Spring Boot and PostgreSQL back end</strong>) that streams prescriptions via WebFlux to an OCR and AI pipeline (n8n/RAG), provides assisted Human-in-the-Loop validation with confidence scores and cross-references diopters and lifestyle habits to suggest the right ZEISS lens.</li>
          <li>Interactive analytics dashboards built with <strong>ApexCharts</strong> track conversion rates, temporal trends and seller rankings for store managers and ZEISS headquarters. Stateless JWT authentication backs a three-tier RBAC hierarchy (ZEISS admin, store manager, employee), a sales lifecycle state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>), IP session auditing and full CRUD for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Personal | 2026 | C# | .NET | ASP.NET Core | PostgreSQL | Entity Framework Core | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Distributed, event-driven fleet and logistics REST API engine in <strong>C# and .NET</strong> (27 endpoints across 5 DDD Bounded Contexts) with Clean Architecture, operating as an OAuth 2.0 / OIDC Resource Server with <strong>Keycloak (RS256/JWKS)</strong> and RBAC across four roles.</li>
          <li>Implements the <strong>Transactional Outbox pattern</strong> with <strong>RabbitMQ</strong> publishing (Publisher Confirms, TTL retry queues and a Dead-Letter Queue), an idempotent consumer keyed by <code>MessageId</code>, optimistic concurrency with PostgreSQL <code>xmin</code>, concurrent polling via <code>FOR UPDATE SKIP LOCKED</code>, distributed tracing in Jaeger, <strong>300 automated xUnit tests</strong> and <strong>278 sustained req/s under ACID write workloads</strong> in k6 load tests (controlled benchmark environment).</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Offline-First Mobile + Distributed Backend - <a href="https://github.com/DevYuriVieira/farmflow-mobile">GitHub (Mobile)</a> · <a href="https://github.com/DevYuriVieira/farmflow-backend">GitHub (Backend)</a></div>
        <div class="entry-meta">Personal | 2026 | React Native | Expo | Java | Spring Boot | Virtual Threads | PostgreSQL | RabbitMQ | Keycloak OIDC | OpenTelemetry</div>
        <ul class="bullets">
          <li>End-to-end agri-tech platform for field operations without connectivity: a <strong>React Native app with an offline-first FIFO mutation queue</strong> and deterministic reconciliation on reconnect, MAPA spray records with a <strong>canvas digital signature hashed with SHA-256</strong>, and IoT telemetry for irrigation pivots and silos.</li>
          <li>A <strong>Java Virtual Threads and Spring Boot</strong> backend sustaining <strong>2,450 req/s</strong> in k6 load tests (controlled benchmark environment) with zero 5xx errors, built on the <strong>Transactional Outbox</strong> pattern with RabbitMQ (CloudEvents, DLQ), <code>FOR UPDATE SKIP LOCKED</code>, PostgreSQL with time-series partitioning and <strong>fail-closed Row-Level Security</strong>, and distributed tracing with OpenTelemetry.</li>
          <li>Verifiable quality across both sides: <strong>549 automated tests</strong> (411 backend and 138 mobile across 26 Jest suites), Keycloak OIDC authentication with biometrics in the mobile app and IDOR enumeration protection in the API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Commercial Platform - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (Real Client) | 2025 - Present | TypeScript | Vite | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | Deployed in production</div>
        <ul class="bullets">
          <li>Commercial platform delivered end to end for a personal trainer: a body assessment engine (WHO BMI, Deurenberg body fat percentage and Mifflin-St Jeor BMR) isolated in a <strong>DOM-free Clean Architecture core</strong>, routing qualified leads with preserved UTM parameters directly into WhatsApp. Scored <strong>100/100 across all four Google Lighthouse categories</strong> with a 32 kB bundle.</li>
          <li>Accessibility treated as a core requirement (WCAG 2.1 AA, VLibras widget with zero layout shift, bionic reading and colorblind filters), verified by <strong>170 Vitest tests and 47 Playwright specs across 26 viewports</strong>, GA4, GTM and Meta Pixel telemetry, and a multi-stage Docker container served by Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Deployed in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular</strong> standalone components, native Signals (<code>signal/computed</code>) and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as an offline-ready PWA with a service worker.</li>
          <li>Covered by <strong>213 automated tests</strong> across three layers (158 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core and 17 Cypress E2E specs), trilingual i18n (PT/EN/ES) and a 100/100 score across all four Google Lighthouse categories on desktop.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">EDUCATION</h2>
      <div class="edu-item">
        <div class="edu-title">Postgraduate Degree in Software Engineering</div>
        <div class="edu-meta">Estácio University | 2024 - 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC/Software Full-Stack (790 h)</div>
        <div class="edu-meta">Serratec | Feb 2026 - Jul 2026</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Technology Residency - TIC 12 (120 h)</div>
        <div class="edu-meta">State University of Ceará (UECE) | Oct 2025 - Dec 2025</div>
      </div>
      <div class="edu-item">
        <div class="edu-title">Bachelor's Degree in Industrial Engineering</div>
        <div class="edu-meta">Estácio University | 2017 - 2022</div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">CERTIFICATIONS &amp; ADDITIONAL TRAINING</h2>
      <ul class="cert-list">
        <li><strong>Programming in Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Front-End Development with Artificial Intelligence (80 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, Angular) (132 h)</strong> - DIO</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>English Language Programme (Completed)</strong> - Wizard by Pearson</li>
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
