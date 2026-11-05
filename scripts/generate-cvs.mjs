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
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP corporativo construído com um time de 11 pessoas para a Zeiss, desenvolvendo a interface em React 19 e TypeScript para validação clínica assistida via OCR + recomendação de lentes via IA e dashboards analíticos em tempo real.</td>
        </tr>
        <tr>
          <td class="ach-label">Work-Fitness &amp; Portfólio<br>(Apps em Produção)</td>
          <td>Plataforma comercial freelance (TypeScript, Clean Architecture, Docker/Nginx, 217 testes) e portfólio interativo (Angular 22 Signals, WebGL/Three.js, 195 testes), ambos com nota máxima 100/100 nas 4 categorias do Google Lighthouse.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow Mobile<br>(React Native Offline-First)</td>
          <td>App de precisão agrícola em React Native (Expo SDK 54, React 19) com fila transacional FIFO offline-first, caderno regulatório MAPA com assinatura digital em canvas (SHA-256), login biométrico OIDC e 138 testes em 26 suítes Jest.</td>
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
          <td>React 18/19 | Angular 22 (Signals, Standalone, OnPush, SSR, PWA) | Three.js / WebGL | Framer Motion | Styled Components | CSS Modules | Vite</td>
        </tr>
        <tr>
          <td class="sk-label">Mobile &amp; UI/UX</td>
          <td>React Native (Expo SDK 54, Arquitetura Offline-First) | React Navigation | React Hook Form | Zod | Design Systems | Acessibilidade (WCAG 2.1 AA/AAA &amp; VLibras)</td>
        </tr>
        <tr>
          <td class="sk-label">Testes &amp; Qualidade</td>
          <td>Vitest | Jest | Playwright (Multi-Viewport E2E) | Cypress | Axe-Core (Auditoria WCAG) | Lighthouse 100/100</td>
        </tr>
        <tr>
          <td class="sk-label">Integração &amp; Backend</td>
          <td>Consumo de APIs REST | Keycloak OIDC &amp; JWT (RBAC) | Integração com IA (Gemini SDK / n8n / OCR) | Java 21 (Spring Boot 4) | C# (.NET 10) | PostgreSQL</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Ferramentas</td>
          <td>Docker &amp; Docker Compose | Nginx | CI/CD (GitHub Actions &amp; Vercel) | Git | GA4 / GTM / Meta Pixel | Figma | Swagger / OpenAPI 3</td>
        </tr>
        <tr>
          <td class="sk-label">Arquitetura &amp; Métodos</td>
          <td>Clean Architecture | Offline-First | Componentização Modular | Mobile-First | Agile / Scrum</td>
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
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4.1 | OCR &amp; RAG (n8n) - Projeto Final Serratec · MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web com <strong>front-end em React 19, TypeScript e Styled Components</strong> (integrado a back-end Spring Boot 4.1 e pipeline de IA n8n/RAG) que exibe um modal de validação clínica assistida (Human-in-the-Loop) com indicador de confiança dos campos extraídos via OCR e cruza as métricas ópticas com os hábitos do paciente para recomendar a lente Zeiss ideal.</li>
          <li>Desenvolvimento de <strong>dashboards analíticos interativos com ApexCharts</strong> para gerentes e para a matriz da Zeiss (lentes mais vendidas, mais recomendadas, evolução temporal, taxa de conversão e ranking de vendedores). Controle de rotas e visibilidade na UI baseado em autenticação JWT em três níveis (admin Zeiss, gerente e funcionário), máquina de estados de atendimento (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) e CRUD completo para lojas, produtos e funcionários.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - App Mobile Offline-First - <a href="https://github.com/DevYuriVieira/farmflow-mobile">github.com/DevYuriVieira/farmflow-mobile</a></div>
        <div class="entry-meta">Pessoal | 2026 | React Native | Expo SDK 54 | React 19 | TypeScript | AsyncStorage | NetInfo | Jest | API Java 21 / Spring Boot 4</div>
        <ul class="bullets">
          <li>App para operadores de campo que trabalham sem sinal: <strong>fila FIFO transacional</strong> persistida em AsyncStorage com reconciliação determinística ao reconectar (NetInfo), para que nenhum apontamento de pulverização se perca.</li>
          <li>Caderno de defensivos exigido pelo MAPA com <strong>assinatura digital desenhada em canvas e hash SHA-256</strong>, login com biometria e Keycloak OIDC, consumindo uma API Java 21 que sustentou <strong>2.450 req/s</strong> em testes k6.</li>
          <li><strong>138 testes em 26 suítes Jest</strong> no cliente, dentro de um conjunto de 549 testes entre app e API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Plataforma Comercial em Produção - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (cliente real) | 2025 - Presente | TypeScript 5.7 | Vite 6 | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | GA4 / GTM / Meta Pixel</div>
        <ul class="bullets">
          <li>Plataforma comercial entregue de ponta a ponta para um personal trainer, no lugar de planilhas e de um WhatsApp sem triagem: motor de avaliação corporal (IMC da OMS, gordura corporal por Deurenberg, TMB por Mifflin-St Jeor) isolado em um <strong>core de Clean Architecture sem DOM</strong> e leads qualificados com UTM preservado direto no WhatsApp. Nota <strong>100/100 nas 4 categorias do Lighthouse</strong>, com bundle de 32 kB.</li>
          <li>Acessibilidade tratada como requisito (WCAG 2.1 AA, VLibras sem layout shift, leitura bionic e filtros para daltonismo), <strong>170 testes Vitest e 47 specs Playwright em 26 viewports</strong>, telemetria GA4, GTM e Meta Pixel, e deploy em contêiner Docker multi-stage com Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular 22</strong>, <strong>Signals nativos (signal/computed)</strong> e detecção de mudanças <code>OnPush</code> em todos os componentes, incluindo um sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, e configurado como PWA offline-ready com service worker.</li>
          <li>Coberto por <strong>195 testes automatizados</strong> em três camadas (140 unitários Vitest, 38 E2E Playwright com auditoria de acessibilidade WCAG 2.1 AA/AAA via Axe-Core, 17 E2E Cypress), com suporte trilíngue i18n (PT/EN/ES) e auditoria Google Lighthouse 100/100/100/100 no desktop em Performance, Acessibilidade, Boas Práticas e SEO.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://github.com/DevYuriVieira/playstation-evolution-timeline">github.com/DevYuriVieira/playstation-evolution-timeline</a> · <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | React 18 | TypeScript 5 | Vite 5 | Framer Motion 11 | CSS Modules | Intersection Observer</div>
        <ul class="bullets">
          <li>Aplicação web interativa em produção na Vercel que apresenta 30 anos de evolução de hardware dos consoles PlayStation (do PS1 ao PS5 Pro), construída com arquitetura modular em <strong>React 18, TypeScript e CSS Modules</strong> e orquestração de scroll no centro da viewport via <strong>Intersection Observer API</strong> (<code>rootMargin: "-50%"</code>), eliminando listeners pesados de scroll.</li>
          <li>Implementa contadores numéricos animados sob demanda (<code>StatsAnimated</code>) e transições declarativas a <strong>60 FPS estáveis com Framer Motion</strong> sem provocar layout thrashing, navegação lateral adaptativa (<code>SideTimeline</code>) e esteira de deploy contínuo (CI/CD) automatizada via GitHub e Vercel.</li>
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
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>Corporate MVP built with an 11-person team for Zeiss, developing the React 19 and TypeScript frontend for assisted OCR prescription validation, AI-driven lens recommendations and real-time sales dashboards.</td>
        </tr>
        <tr>
          <td class="ach-label">Work-Fitness &amp; Portfolio<br>(Live Production Apps)</td>
          <td>Freelance commercial platform (TypeScript, Clean Architecture, Docker/Nginx, 217 tests) and interactive portfolio (Angular 22 Signals, WebGL/Three.js, 195 tests), both scoring 100/100 across all 4 Google Lighthouse categories.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow Mobile<br>(Offline-First React Native)</td>
          <td>Precision agri-tech mobile app in React Native (Expo SDK 54, React 19) with an offline-first FIFO mutation queue, MAPA spray records with canvas SHA-256 digital signatures, OIDC biometric login and 138 tests across 26 Jest suites.</td>
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
          <td>React 18/19 | Angular 22 (Signals, Standalone, OnPush, SSR, PWA) | Three.js / WebGL | Framer Motion | Styled Components | CSS Modules | Vite</td>
        </tr>
        <tr>
          <td class="sk-label">Mobile &amp; UI/UX</td>
          <td>React Native (Expo SDK 54, Offline-First Architecture) | React Navigation | React Hook Form | Zod | Design Systems | Accessibility (WCAG 2.1 AA/AAA &amp; VLibras)</td>
        </tr>
        <tr>
          <td class="sk-label">Testing &amp; Quality</td>
          <td>Vitest | Jest | Playwright (Multi-Viewport E2E) | Cypress | Axe-Core (WCAG Audits) | Lighthouse 100/100</td>
        </tr>
        <tr>
          <td class="sk-label">API &amp; Backend Integration</td>
          <td>REST APIs | Keycloak OIDC &amp; JWT (RBAC) | Generative AI Integration (Gemini SDK / n8n / OCR) | Java 21 (Spring Boot 4) | C# (.NET 10) | PostgreSQL</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Tools</td>
          <td>Docker &amp; Docker Compose | Nginx | CI/CD (GitHub Actions &amp; Vercel) | Git | GA4 / GTM / Meta Pixel | Figma | Swagger / OpenAPI 3</td>
        </tr>
        <tr>
          <td class="sk-label">Architecture &amp; Practices</td>
          <td>Clean Architecture | Offline-First | Modular Componentization | Mobile-First | Agile / Scrum</td>
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
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Vite 8 | Styled Components 6 | React Router 7 | ApexCharts 5 | Java 17 | Spring Boot 4.1 | OCR &amp; RAG (n8n) - Serratec Final Project · Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses by hand, making recommendations inconsistent. The team built a web platform with a <strong>React 19, TypeScript and Styled Components front end</strong> (connected to a Java 17/Spring Boot 4.1 back end and an n8n/RAG AI pipeline) featuring an assisted Human-in-the-Loop validation modal with field-level OCR confidence scores and matching optical parameters with patient lifestyle habits to recommend the ideal Zeiss lens.</li>
          <li>Built <strong>interactive analytics dashboards with ApexCharts</strong> for store managers and Zeiss headquarters (best-selling and most recommended lenses, temporal trends, conversion rates and seller rankings). Role-based UI route protection backed by a three-tier JWT hierarchy (Zeiss admin, store manager, employee), consultation lifecycle state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) and full CRUD views for stores, products and employees.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Offline-First Mobile App - <a href="https://github.com/DevYuriVieira/farmflow-mobile">github.com/DevYuriVieira/farmflow-mobile</a></div>
        <div class="entry-meta">Personal | 2026 | React Native | Expo SDK 54 | React 19 | TypeScript | AsyncStorage | NetInfo | Jest | Java 21 / Spring Boot 4 API</div>
        <ul class="bullets">
          <li>App for field operators who work with no signal: a <strong>transactional FIFO mutation queue</strong> persisted in AsyncStorage with deterministic reconciliation on reconnect (NetInfo), so no spray record is ever lost.</li>
          <li>MAPA-mandated spray records with a <strong>canvas-drawn digital signature hashed with SHA-256</strong>, biometric login with Keycloak OIDC, backed by a Java 21 API that sustained <strong>2,450 req/s</strong> in k6 tests.</li>
          <li><strong>138 tests across 26 Jest suites</strong> on the client, within a 549-test suite spanning app and API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Production Commercial Platform - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (real client) | 2025 - Present | TypeScript 5.7 | Vite 6 | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | GA4 / GTM / Meta Pixel</div>
        <ul class="bullets">
          <li>Commercial platform delivered end to end for a personal trainer, replacing spreadsheets and an untriaged WhatsApp inbox: a body-assessment engine (WHO BMI, Deurenberg body fat, Mifflin-St Jeor BMR) isolated in a <strong>DOM-free Clean Architecture core</strong>, and qualified leads with UTM tags preserved straight into WhatsApp. A <strong>100/100 score in all 4 Lighthouse categories</strong> with a 32 kB bundle.</li>
          <li>Accessibility treated as a requirement (WCAG 2.1 AA, VLibras with no layout shift, bionic reading and colorblind filters), <strong>170 Vitest tests and 47 Playwright specs across 26 viewports</strong>, GA4, GTM and Meta Pixel telemetry, and a multi-stage Docker container served by Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Live in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular 22</strong> standalone components, <strong>native Signals (signal/computed)</strong> and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as an offline-ready PWA with a service worker.</li>
          <li>Covered by <strong>195 automated tests</strong> across three layers (140 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core, 17 Cypress E2E specs), with trilingual i18n (PT/EN/ES) and a 100/100/100/100 Google Lighthouse audit on desktop across Performance, Accessibility, Best Practices and SEO.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">PlayStation Evolution Timeline - <a href="https://github.com/DevYuriVieira/playstation-evolution-timeline">github.com/DevYuriVieira/playstation-evolution-timeline</a> · <a href="https://playstation-evolution-timeline.vercel.app">playstation-evolution-timeline.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | React 18 | TypeScript 5 | Vite 5 | Framer Motion 11 | CSS Modules | Intersection Observer</div>
        <ul class="bullets">
          <li>Live production web application showcasing 30 years of PlayStation console hardware evolution (PS1 to PS5 Pro), engineered with modular <strong>React 18, TypeScript and CSS Modules</strong> components and viewport-centered scroll orchestration via the <strong>Intersection Observer API</strong> (<code>rootMargin: "-50%"</code>), eliminating expensive window scroll listeners.</li>
          <li>Implements visibility-triggered numeric counters (<code>StatsAnimated</code>) and hardware-accelerated <strong>60 FPS animations using Framer Motion</strong> without layout thrashing, an adaptive <code>SideTimeline</code> navigation bar, and an automated CI/CD pipeline via GitHub and Vercel.</li>
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
        Engenheiro de Software Back-End com foco em <strong>Java 21 LTS (Spring Boot 4 &amp; Virtual Threads)</strong> e <strong>.NET 10 (C# 14 / ASP.NET Core)</strong>, com sólida experiência prática em <strong>APIs RESTful</strong>, <strong>mensageria assíncrona (RabbitMQ &amp; Transactional Outbox)</strong>, <strong>PostgreSQL</strong> e <strong>Clean Architecture / DDD</strong>. Desenvolvo sistemas distribuídos seguros (JWT, Spring Security, Keycloak OIDC), resilientes e cobertos por testes automatizados (xUnit, JUnit 5 e k6). Mais de 910 h de formação prática em software pelo Serratec e UECE. Pós-graduado em Engenharia de Software. Inglês Avançado (B2+), com programa C1/C2 concluído pela Wizard. Disponível para atuação remota nacional e internacional.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP corporativo construído com um time de 11 pessoas para a Zeiss, integrando APIs REST em Java / Spring Boot 4.1, WebFlux, PostgreSQL 18, controle de acesso JWT em 3 níveis e pipeline de OCR + IA (n8n/RAG).</td>
        </tr>
        <tr>
          <td class="ach-label">FleetOps API<br>(.NET 10 &amp; RabbitMQ)</td>
          <td>Arquitetura distribuída em C# 14 / .NET 10 com Clean Architecture, DDD, Transactional Outbox, RabbitMQ (DLQ), Keycloak OIDC, PostgreSQL 18 (SKIP LOCKED / xmin), 300 testes em xUnit e 278 RPS ACID no k6.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow Backend<br>(Java 21 &amp; Virtual Threads)</td>
          <td>Motor distribuído em Java 21 LTS e Spring Boot 4.1 sustentando 2.450 req/s no k6 com zero erros 5xx, Transactional Outbox com RabbitMQ (CloudEvents), PostgreSQL 17 particionado com RLS fail-closed e 411 testes automatizados.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Linguagens</td>
          <td>Java 21 LTS (Java 17/21) | C# 14 (.NET 10) | SQL | TypeScript / JavaScript</td>
        </tr>
        <tr>
          <td class="sk-label">Frameworks Backend</td>
          <td>Spring Boot 3/4 | Virtual Threads | Spring WebFlux | Spring Security 6 | ASP.NET Core (.NET 10) | JPA / Hibernate | Entity Framework Core 10</td>
        </tr>
        <tr>
          <td class="sk-label">Mensageria &amp; Segurança</td>
          <td>RabbitMQ (CloudEvents v1.0, Publisher Confirms, TTL Retry, DLX/DLQ) | Transactional Outbox | Sagas Coreografadas | Keycloak OIDC (RS256/JWKS) | JWT &amp; RBAC</td>
        </tr>
        <tr>
          <td class="sk-label">Banco de Dados</td>
          <td>PostgreSQL 16–18 (Particionamento Temporal, Índices BRIN, RLS Fail-Closed, FOR UPDATE SKIP LOCKED, MVCC xmin, 3FN) | MySQL | Otimização N+1</td>
        </tr>
        <tr>
          <td class="sk-label">Testes &amp; Observabilidade</td>
          <td>JUnit 5 (411 testes sob Virtual Threads) | xUnit (300 testes Unitários/Integração/Fault Injection) | k6 (Load Testing) | OpenTelemetry &amp; Jaeger (W3C Tracing)</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Ferramentas</td>
          <td>Docker &amp; Docker Compose | CI/CD (GitHub Actions) | Git | Linux / Nginx | DBeaver | Swagger / OpenAPI 3 | Maven | n8n (OCR &amp; RAG)</td>
        </tr>
        <tr>
          <td class="sk-label">Arquitetura &amp; Métodos</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | Event-Driven Architecture | SOLID | Idempotência &amp; Concorrência | API-First | Agile / Scrum</td>
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
          <li>Elaborei todo o material didático (PDFs de exercícios, resumos, tutoriais e materiais de apoio) a partir da ementa da instituição, além de prestar suporte individual aos alunos.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Desenvolvedor Full-Stack / Back-End (Residência de Software)</div>
        <div class="entry-meta">Serratec - Residência TIC/Software | Fev 2026 - Jul 2026 | Petrópolis, RJ | 790 h</div>
        <ul class="bullets">
          <li>Concluí formação intensiva de 790 h com forte foco em <strong>Banco de Dados PostgreSQL</strong>, <strong>POO em Java 17</strong> e <strong>APIs RESTful com Spring Boot e Spring Security</strong>, encerrando com projeto final entregue como MVP corporativo sob contrato em parceria com a <strong>Zeiss</strong>.</li>
          <li>Projetei e implementei arquiteturas em camadas (Controller, Service, Repository, DAO, DTOs), modelagem relacional 3FN, autenticação JWT/RBAC e integrações de serviços em equipe Ágil (Scrum, Git e Code Review).</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJETOS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - Assistente de Recomendações</div>
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | Java 17 | Spring Boot 4.1 | Spring WebFlux | PostgreSQL 18 | JWT (RBAC) | n8n (OCR &amp; RAG) | OpenAPI 3 - Projeto Final Serratec · MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>API REST corporativa em <strong>Java 17, Spring Boot 4.1 e PostgreSQL 18</strong> com streaming não-bloqueante via <strong>Spring WebFlux <code>WebClient</code></strong> para pipeline de OCR e IA (n8n/RAG), cálculo de confiabilidade da receita e recomendação de lentes Zeiss.</li>
          <li>Autenticação stateless JWT com RBAC em três níveis (admin Zeiss, gerente e funcionário), auditoria de sessões por IP, máquina de estados comercial (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) e CRUD completo documentado com Swagger / OpenAPI 3.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Pessoal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Motor back-end distribuído e orientado a eventos em <strong>.NET 10 (C# 14)</strong> para gestão de frotas e logística (27 endpoints REST em 5 contextos delimitados DDD: Veículos, Motoristas, Entregas, Rotas e Manutenção) com Clean Architecture, operando como Resource Server OAuth 2.0 / OIDC com <strong>Keycloak (RS256/JWKS)</strong> e RBAC para quatro papéis.</li>
          <li>Implementa <strong>Transactional Outbox</strong> integrado ao DbContext eliminando dual-write hazard, concorrência otimista via <code>xmin</code> do PostgreSQL, polling concorrente via <code>FOR UPDATE SKIP LOCKED</code>, mensageria com <strong>RabbitMQ</strong> (Publisher Confirms, filas TTL de retry e DLQ), consumidor idempotente com <code>MessageId</code> e tracing distribuído W3C com OpenTelemetry e Jaeger.</li>
          <li>Suíte de <strong>300 testes automatizados</strong> (166 unitários e 134 integração/falhas) em xUnit com 100% de aprovação e throughput transacional de <strong>278 RPS sustentados</strong> em escritas ACID de domínio sob testes de carga k6.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Plataforma Agro Distribuída (Java 21) - <a href="https://github.com/DevYuriVieira/farmflow-backend">github.com/DevYuriVieira/farmflow-backend</a></div>
        <div class="entry-meta">Pessoal | 2026 | Java 21 LTS | Spring Boot 4.1 | Virtual Threads | PostgreSQL 17 | RabbitMQ | Keycloak OIDC | OpenTelemetry | k6</div>
        <ul class="bullets">
          <li>Projeto autoral para operações críticas do agro: motor distribuído em <strong>Java 21 LTS com Virtual Threads e Spring Boot 4.1</strong> sustentando <strong>2.450 req/s</strong> em testes de carga k6 com zero erros 5xx, arquitetado para telemetria IoT de pivôs/silos e conformidade regulatória com o MAPA.</li>
          <li>Garantia de consistência sem dual-write: <strong>Transactional Outbox</strong> sobre RabbitMQ (CloudEvents v1.0, Publisher Confirms, DLQ), polling concorrente com <code>FOR UPDATE SKIP LOCKED</code>, sagas coreografadas com locks consultivos (<code>pg_try_advisory_xact_lock</code>) e tracing distribuído ponta a ponta W3C com OpenTelemetry.</li>
          <li>Engenharia de dados e segurança de alta performance: <strong>PostgreSQL 17</strong> com particionamento temporal declarativo, índices BRIN e <strong>Row Level Security fail-closed</strong>; Keycloak 26.1 OIDC com proteção contra enumeração IDOR (404) e <strong>411 testes automatizados</strong> sob 100 Virtual Threads.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Colaborativo (5 devs - Residência Serratec) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>API RESTful desenvolvida em equipe em <strong>Java 17 e Spring Boot 3</strong> estruturada em camadas desacopladas (Controller, Service, Repository, DTOs), gerenciando ciclo de pedidos com relacionamento N:N, totalização dinâmica de itens e controle concorrente de estoque.</li>
          <li>Segurança na cadeia de filtros do <strong>Spring Security 6 (JWT / RBAC)</strong>, integração com ViaCEP para autopreenchimento de endereços, disparos de e-mails transacionais via JavaMail, tratamento centralizado com <code>@ControllerAdvice</code> e documentação via Swagger UI / OpenAPI 3.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Sistema de Folha de Pagamento - <a href="https://github.com/DevYuriVieira/payroll-system-java">github.com/DevYuriVieira/payroll-system-java</a></div>
        <div class="entry-meta">Colaborativo (4 devs - Residência Serratec) | 2026 | Java 17 | PostgreSQL | JDBC | Arquitetura MVC + DAO | BigDecimal | Singleton Pattern</div>
        <ul class="bullets">
          <li>Processamento em lote e cálculo de alíquotas progressivas de <strong>INSS e IRRF</strong> com deduções por dependente, leitura de funcionários via CSV e persistência com <strong>JDBC puro no PostgreSQL</strong> em arquitetura <strong>MVC + DAO</strong> sem ORM.</li>
          <li>Precisão monetária exata com <code>BigDecimal (RoundingMode.HALF_UP)</code>, gerenciador de conexões com padrão <strong>Singleton</strong>, exceções customizadas de domínio (<code>CpfInvalidoException</code>, <code>SalarioInvalidoException</code>) e exportação automatizada em CSV.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Dental Clinic Management System (DCMS) - <a href="https://github.com/DevYuriVieira/dentacare-management-system">github.com/DevYuriVieira/dentacare-management-system</a></div>
        <div class="entry-meta">Colaborativo (6 devs - Residência Serratec 2026.1) | 2026 | PostgreSQL 16+ | SQL Avançado (DDL, DML, DQL) | Modelagem 3FN | Database Indexing | SQL Views</div>
        <ul class="bullets">
          <li>Banco relacional transacional em <strong>PostgreSQL 16+</strong> estritamente normalizado até a <strong>3ª Forma Normal (3FN)</strong>, centralizando ciclo de vida de consultas e agendamentos, histórico N:N de procedimentos clínicos e cadastro de profissionais (CRO) com zero dados órfãos.</li>
          <li>Regras de negócio via DDL (validações Regex para CPF e CRO, restrições temporais e chaves únicas), integridade referencial estrita (RESTRICT e CASCADE), índices relacionais estratégicos e <strong>Views analíticas em SQL</strong> para relatórios operacionais e de faturamento.</li>
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
        <li><strong>Programação em Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, SQL) (132 h)</strong> - DIO</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
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
        Back-End Software Engineer specializing in <strong>Java 21 LTS (Spring Boot 4 &amp; Virtual Threads)</strong> and <strong>.NET 10 (C# 14 / ASP.NET Core)</strong>, with hands-on experience in <strong>RESTful APIs</strong>, <strong>asynchronous messaging (RabbitMQ &amp; Transactional Outbox)</strong>, <strong>PostgreSQL</strong> and <strong>Clean Architecture / DDD</strong>. I build secure (JWT, Spring Security, Keycloak OIDC), resilient distributed backend services backed by automated test suites (xUnit, JUnit 5 and k6). Over 910 h of software development training at Serratec and UECE. Postgraduate in Software Engineering. Advanced English (B2+), with a C1/C2 programme completed at Wizard. Open to national and international remote roles.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>Corporate MVP built with an 11-person team for Zeiss, integrating Java / Spring Boot 4.1 REST APIs, WebFlux, PostgreSQL 18, three-tier JWT role-based access control and an OCR + AI pipeline (n8n/RAG).</td>
        </tr>
        <tr>
          <td class="ach-label">FleetOps API<br>(.NET 10 &amp; RabbitMQ)</td>
          <td>Distributed architecture in C# 14 / .NET 10 with Clean Architecture, DDD, Transactional Outbox, RabbitMQ (DLQ), Keycloak OIDC, PostgreSQL 18 (SKIP LOCKED / xmin), 300 xUnit tests and 278 RPS ACID throughput on k6.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow Backend<br>(Java 21 &amp; Virtual Threads)</td>
          <td>Distributed engine in Java 21 LTS and Spring Boot 4.1 sustaining 2,450 req/s in k6 with zero 5xx errors, Transactional Outbox over RabbitMQ (CloudEvents), time-series partitioned PostgreSQL 17 with fail-closed RLS and 411 automated tests.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Languages</td>
          <td>Java 21 LTS (Java 17/21) | C# 14 (.NET 10) | SQL | TypeScript / JavaScript</td>
        </tr>
        <tr>
          <td class="sk-label">Backend Frameworks</td>
          <td>Spring Boot 3/4 | Virtual Threads | Spring WebFlux | Spring Security 6 | ASP.NET Core (.NET 10) | JPA / Hibernate | Entity Framework Core 10</td>
        </tr>
        <tr>
          <td class="sk-label">Messaging &amp; Security</td>
          <td>RabbitMQ (CloudEvents v1.0, Publisher Confirms, TTL Retry, DLX/DLQ) | Transactional Outbox | Choreographed Sagas | Keycloak OIDC (RS256/JWKS) | JWT &amp; RBAC</td>
        </tr>
        <tr>
          <td class="sk-label">Databases</td>
          <td>PostgreSQL 16–18 (Time-Series Partitioning, BRIN Indexes, Fail-Closed RLS, FOR UPDATE SKIP LOCKED, MVCC xmin, 3NF) | MySQL | N+1 Query Optimisation</td>
        </tr>
        <tr>
          <td class="sk-label">Testing &amp; Observability</td>
          <td>JUnit 5 (411 tests under Virtual Threads) | xUnit (300 Unit/Integration/Fault-Injection tests) | k6 (Load Testing) | OpenTelemetry &amp; Jaeger (W3C Tracing)</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Tools</td>
          <td>Docker &amp; Docker Compose | CI/CD (GitHub Actions) | Git | Linux / Nginx | DBeaver | Swagger / OpenAPI 3 | Maven | n8n (OCR &amp; RAG)</td>
        </tr>
        <tr>
          <td class="sk-label">Architecture &amp; Practices</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | Event-Driven Architecture | SOLID | Idempotency &amp; Concurrency | API-First | Agile / Scrum</td>
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
          <li>Completed a 790-hour intensive programme with strong emphasis on <strong>PostgreSQL Databases</strong>, <strong>OOP in Java 17</strong> and <strong>RESTful APIs with Spring Boot and Spring Security</strong>, closing with a corporate MVP delivered under contract in partnership with <strong>Zeiss</strong>.</li>
          <li>Designed and implemented layered backend architectures (Controller, Service, Repository, DAO, DTOs), 3NF relational schemas, JWT/RBAC authentication and API integrations in an Agile team (Scrum, Git and Code Review).</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">PROJECTS</h2>

      <div class="entry">
        <div class="entry-title">Zeiss - AI Recommendation Platform</div>
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | Java 17 | Spring Boot 4.1 | Spring WebFlux | PostgreSQL 18 | JWT (RBAC) | n8n (OCR &amp; RAG) | OpenAPI 3 - Serratec Final Project · Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>Enterprise REST API in <strong>Java 17, Spring Boot 4.1 and PostgreSQL 18</strong> featuring non-blocking prescription streaming via <strong>Spring WebFlux <code>WebClient</code></strong> to an OCR and AI pipeline (n8n/RAG), extraction scoring and Zeiss lens recommendation.</li>
          <li>Stateless JWT authentication with three-tier RBAC (admin, manager, staff), session IP auditing, commercial sales state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>) and full CRUD documented via Swagger / OpenAPI 3.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FleetOps API (C# / .NET) - <a href="https://github.com/DevYuriVieira/fleetops-api">github.com/DevYuriVieira/fleetops-api</a></div>
        <div class="entry-meta">Personal | 2026 | C# 14 | .NET 10 | ASP.NET Core | PostgreSQL 18 | EF Core 10 | RabbitMQ | Keycloak OIDC | OpenTelemetry | xUnit</div>
        <ul class="bullets">
          <li>Distributed, event-driven fleet and logistics REST API engine in <strong>.NET 10 (C# 14)</strong> (27 endpoints across 5 DDD Bounded Contexts: Vehicles, Drivers, Deliveries, Routes and Maintenance) with Clean Architecture, operating as an OAuth 2.0 / OIDC Resource Server with <strong>Keycloak (RS256/JWKS)</strong> and RBAC across four roles.</li>
          <li>Implements <strong>Transactional Outbox</strong> integrated into DbContext eliminating dual-write hazards, optimistic concurrency via PostgreSQL <code>xmin</code>, concurrent polling via <code>FOR UPDATE SKIP LOCKED</code>, <strong>RabbitMQ</strong> messaging (Publisher Confirms, 10s/30s/90s TTL retry queues and DLQ), idempotent consumer by <code>MessageId</code> and W3C distributed tracing with OpenTelemetry and Jaeger.</li>
          <li>Suite of <strong>300 automated tests</strong> (166 unit and 134 integration/concurrency/fault-injection) in xUnit with 100% pass rate and empirical throughput of <strong>278 sustained RPS</strong> under ACID domain writes in k6 load tests.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">FarmFlow - Distributed Agri-Tech Platform (Java 21) - <a href="https://github.com/DevYuriVieira/farmflow-backend">github.com/DevYuriVieira/farmflow-backend</a></div>
        <div class="entry-meta">Personal | 2026 | Java 21 LTS | Spring Boot 4.1 | Virtual Threads | PostgreSQL 17 | RabbitMQ | Keycloak OIDC | OpenTelemetry | k6</div>
        <ul class="bullets">
          <li>Authorial distributed platform engineered for critical agro-industrial field operations: <strong>Java 21 LTS with Virtual Threads and Spring Boot 4.1</strong> backend sustaining <strong>2,450 req/s</strong> in k6 load tests with zero 5xx errors, built for IoT pivot/silo telemetry and MAPA regulatory compliance.</li>
          <li>Consistency without dual-writes: <strong>Transactional Outbox</strong> over RabbitMQ (CloudEvents v1.0, Publisher Confirms, DLQ), concurrent polling via <code>FOR UPDATE SKIP LOCKED</code>, choreographed sagas with advisory locks (<code>pg_try_advisory_xact_lock</code>) and end-to-end W3C tracing with OpenTelemetry.</li>
          <li>Data and security at scale: <strong>PostgreSQL 17</strong> with declarative time-series partitioning, BRIN indexes and <strong>fail-closed Row Level Security</strong>; Keycloak 26.1 OIDC with IDOR enumeration protection (404 instead of 403) and <strong>411 automated tests</strong> executing under 100 Virtual Threads.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Spring Boot E-Commerce API - <a href="https://github.com/DevYuriVieira/ecommerce-serratec-api">github.com/DevYuriVieira/ecommerce-serratec-api</a></div>
        <div class="entry-meta">Collaborative (5 devs - Serratec Residency) | 2026 | Java 17 | Spring Boot 3 | Spring Security 6 | PostgreSQL | JPA/Hibernate | Swagger/OpenAPI 3</div>
        <ul class="bullets">
          <li>Team-developed RESTful API in <strong>Java 17 and Spring Boot 3</strong> structured in decoupled layers (Controller, Service, Repository, DTOs), managing order lifecycles with N:N mappings, dynamic item totalization and concurrent inventory control.</li>
          <li>Robust security via <strong>Spring Security 6 filter chain (stateless JWT / RBAC)</strong>, integration with external ViaCEP API for automatic address resolution, transactional email notifications with JavaMail, global exception handling (<code>@ControllerAdvice</code>) and OpenAPI 3 / Swagger UI contracts.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Payroll System - <a href="https://github.com/DevYuriVieira/payroll-system-java">github.com/DevYuriVieira/payroll-system-java</a></div>
        <div class="entry-meta">Collaborative (4 devs - Serratec Residency) | 2026 | Java 17 | PostgreSQL | JDBC | MVC + DAO Architecture | BigDecimal | Singleton Pattern</div>
        <ul class="bullets">
          <li>Automates batch processing and progressive <strong>INSS and IRRF</strong> payroll tax calculations with dependent deductions, reading employee data via CSV and persisting through <strong>raw JDBC on PostgreSQL</strong> in a layered <strong>MVC + DAO</strong> architecture built without an ORM.</li>
          <li>Exact monetary precision with <code>BigDecimal (RoundingMode.HALF_UP)</code>, <strong>Singleton</strong> JDBC connection manager, custom domain exceptions (<code>CpfInvalidoException</code>, <code>SalarioInvalidoException</code>) and automated CSV report export.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Dental Clinic Management System (DCMS) - <a href="https://github.com/DevYuriVieira/dentacare-management-system">github.com/DevYuriVieira/dentacare-management-system</a></div>
        <div class="entry-meta">Collaborative (6 devs - Serratec Residency 2026.1) | 2026 | PostgreSQL 16+ | Advanced SQL (DDL, DML, DQL) | 3NF Modeling | Database Indexing | SQL Views</div>
        <ul class="bullets">
          <li>Transactional relational database in <strong>PostgreSQL 16+</strong> strictly normalized up to <strong>3rd Normal Form (3NF)</strong>, centralizing appointment lifecycle workflows, N:N associative clinical procedure histories and dentist records (CRO) with zero orphan data.</li>
          <li>Enforces domain rules via DDL constraints (Regex validations for CPF and CRO, temporal logical checks and unique keys), strict referential integrity (RESTRICT and CASCADE), strategic B-Tree indexes and <strong>analytical SQL views</strong> for operational and revenue reporting.</li>
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
        <li><strong>Programming in Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, SQL) (132 h)</strong> - DIO</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
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
        Engenheiro de Software Full-Stack com foco em <strong>Java 21 LTS (Spring Boot 4 &amp; Virtual Threads)</strong>, <strong>.NET 10 (C# 14)</strong> e <strong>TypeScript (React 19, Angular 22 e React Native)</strong>, além de experiência prática em <strong>Python (Django)</strong>, <strong>APIs REST</strong>, <strong>RabbitMQ</strong> e <strong>PostgreSQL</strong>. Desenvolvo sistemas distribuídos e aplicações web/mobile com segurança (JWT, Keycloak OIDC), integrações com IA e testes automatizados. Mais de 910 h de formação prática em software pelo Serratec e UECE. Pós-graduado em Engenharia de Software. Inglês Avançado (B2+), com programa C1/C2 concluído pela Wizard. Disponível para atuação remota nacional e internacional.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">DESTAQUES</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Zeiss - Plataforma de<br>Recomendação com IA</td>
          <td>MVP corporativo full-stack construído com um time de 11 pessoas para a Zeiss (React 19, TypeScript e Java/Spring Boot 4.1), substituindo a leitura manual de receitas por OCR + IA (n8n/RAG) e dashboards analíticos em tempo real.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow &amp; FleetOps<br>(Sistemas Distribuídos)</td>
          <td>Arquiteturas orientadas a eventos com Transactional Outbox, RabbitMQ, Keycloak OIDC e PostgreSQL (SKIP LOCKED / RLS): FarmFlow (Java 21 Virtual Threads + React Native Offline-First, 2.450 req/s, 549 testes) e FleetOps (.NET 10, 278 RPS ACID, 300 testes).</td>
        </tr>
        <tr>
          <td class="ach-label">Work-Fitness &amp; Portfólio<br>(Apps em Produção)</td>
          <td>Plataforma comercial freelance (TypeScript, Clean Architecture, Docker/Nginx, 217 testes) e portfólio interativo (Angular 22 Signals, WebGL/Three.js, 195 testes), ambos com nota máxima 100/100 nas 4 categorias do Google Lighthouse.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Linguagens</td>
          <td>Java 21 LTS (Java 17/21) | C# 14 (.NET 10) | TypeScript | JavaScript (ES6+) | Python | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend &amp; Mobile</td>
          <td>React 18/19 | Angular 22 (Signals, Standalone, OnPush, PWA) | React Native (Expo SDK 54, Offline-First) | Three.js / WebGL | SCSS | Zod | WCAG 2.1 AA/AAA</td>
        </tr>
        <tr>
          <td class="sk-label">Backend &amp; Mensageria</td>
          <td>Spring Boot 3/4 (Virtual Threads, WebFlux) | ASP.NET Core (.NET 10) | Django | RabbitMQ (Outbox, CloudEvents, DLQ) | JPA/Hibernate | EF Core 10 | Keycloak OIDC &amp; JWT</td>
        </tr>
        <tr>
          <td class="sk-label">Testes &amp; Observabilidade</td>
          <td>JUnit 5 | xUnit | Vitest | Jest | Playwright (E2E) | Cypress | Axe-Core (WCAG) | k6 (Load Testing) | OpenTelemetry &amp; Jaeger (W3C Tracing)</td>
        </tr>
        <tr>
          <td class="sk-label">Banco de Dados</td>
          <td>PostgreSQL 16–18 (Particionamento Temporal, Índices BRIN, RLS Fail-Closed, FOR UPDATE SKIP LOCKED, MVCC xmin, 3FN) | MySQL | Otimização N+1</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Ferramentas</td>
          <td>Docker &amp; Docker Compose | Nginx | CI/CD (GitHub Actions &amp; Vercel) | Git | DBeaver | Swagger / OpenAPI 3 | Maven | n8n (OCR &amp; RAG)</td>
        </tr>
        <tr>
          <td class="sk-label">Arquitetura &amp; Métodos</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | Event-Driven Architecture | Offline-First | SOLID | Agile / Scrum | API-First</td>
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
        <div class="entry-meta">Colaborativo (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Styled Components | ApexCharts | Java 17 | Spring Boot 4.1 | PostgreSQL 18 | JWT | n8n (OCR &amp; RAG) - Projeto Final Serratec · MVP corporativo (contrato)</div>
        <ul class="bullets">
          <li>Vendedores de ótica liam receitas e escolhiam lentes manualmente, gerando recomendações inconsistentes. Foi construída uma plataforma web full-stack (<strong>front-end em React 19, TypeScript e Styled Components; back-end em Java 17, Spring Boot 4.1 e PostgreSQL 18</strong>) que lê receitas via streaming WebFlux para um pipeline de OCR e IA (n8n/RAG), exibe validação assistida com score de confiança e cruza dioptrias e estilo de vida para sugerir a lente Zeiss adequada.</li>
          <li>Painel gerencial interativo com <strong>ApexCharts</strong> acompanhando conversão, evolução temporal e ranking para gerentes e matriz da Zeiss. Autenticação stateless JWT com RBAC em três níveis (admin Zeiss, gerente e funcionário), máquina de estados comercial (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>), auditoria de acessos por IP e CRUD completo de lojas, produtos e funcionários.</li>
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
        <div class="entry-title">FarmFlow - Mobile Offline-First + Backend Distribuído - <a href="https://github.com/DevYuriVieira/farmflow-mobile">farmflow-mobile</a> · <a href="https://github.com/DevYuriVieira/farmflow-backend">farmflow-backend</a></div>
        <div class="entry-meta">Pessoal | 2026 | React Native | Expo SDK 54 | React 19 | Java 21 | Spring Boot 4.1 | Virtual Threads | PostgreSQL 17 | RabbitMQ | Keycloak OIDC | OpenTelemetry</div>
        <ul class="bullets">
          <li>Plataforma ponta a ponta para o agro, onde a internet some no meio da lavoura: app em <strong>React Native com fila FIFO offline-first</strong> e reconciliação determinística ao reconectar, caderno de defensivos do MAPA com <strong>assinatura digital em canvas e hash SHA-256</strong>, e telemetria IoT de pivôs e silos.</li>
          <li>Backend em <strong>Java 21 com Virtual Threads</strong> sustentando <strong>2.450 req/s</strong> em testes k6 com zero erros 5xx, usando <strong>Transactional Outbox</strong> com RabbitMQ (CloudEvents, DLQ), <code>FOR UPDATE SKIP LOCKED</code>, PostgreSQL 17 com particionamento temporal e Row Level Security fail-closed, e tracing W3C com OpenTelemetry.</li>
          <li>Qualidade verificável nos dois lados: <strong>549 testes automatizados</strong> (411 no backend e 138 no mobile, em 26 suítes Jest), autenticação Keycloak OIDC com biometria no app e proteção contra enumeração IDOR na API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Plataforma Comercial em Produção - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (cliente real) | 2025 - Presente | TypeScript 5.7 | Vite 6 | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | GA4 / GTM / Meta Pixel</div>
        <ul class="bullets">
          <li>Plataforma comercial entregue de ponta a ponta para um personal trainer, no lugar de planilhas e de um WhatsApp sem triagem: motor de avaliação corporal (IMC da OMS, gordura corporal por Deurenberg, TMB por Mifflin-St Jeor) isolado em um <strong>core de Clean Architecture sem DOM</strong> e leads qualificados com UTM preservado direto no WhatsApp. Nota <strong>100/100 nas 4 categorias do Lighthouse</strong>, com bundle de 32 kB.</li>
          <li>Acessibilidade tratada como requisito (WCAG 2.1 AA, VLibras sem layout shift, leitura bionic e filtros para daltonismo), <strong>170 testes Vitest e 47 specs Playwright em 26 viewports</strong>, telemetria GA4, GTM e Meta Pixel, e deploy em contêiner Docker multi-stage com Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Portfólio Pessoal - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Pessoal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Em produção</div>
        <ul class="bullets">
          <li>Desenvolvido com componentes standalone do <strong>Angular 22</strong>, Signals nativos (<code>signal/computed</code>) e <code>OnPush</code> em todos os componentes, incluindo um sistema de partículas <strong>WebGL/Three.js</strong> acelerado por GPU com interatividade por mouse e toque, configurado como PWA com service worker.</li>
          <li>Coberto por <strong>195 testes automatizados</strong> em três camadas (140 unitários Vitest, 38 E2E Playwright com auditoria WCAG 2.1 AA/AAA via Axe-Core, 17 E2E Cypress), suporte trilíngue i18n (PT/EN/ES) e auditoria Google Lighthouse 100/100/100/100 no desktop.</li>
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
        <li><strong>Programação em Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Desenvolvimento Front-End com Inteligência Artificial (80 h)</strong> - Senac</li>
        <li><strong>Fundamentos em Teste de Software (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>Banco de Dados SQL - Intermediário e Avançado</strong> - Instituto Matera</li>
        <li><strong>Bootcamp Philips Full-Stack Developer (Java, Spring Boot, Angular)</strong> - DIO</li>
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
        Full-Stack Software Engineer with a focus on <strong>Java 21 LTS (Spring Boot 4 &amp; Virtual Threads)</strong>, <strong>.NET 10 (C# 14)</strong> and <strong>TypeScript (React 19, Angular 22 and React Native)</strong>, plus hands-on experience in <strong>Python (Django)</strong>, <strong>REST APIs</strong>, <strong>RabbitMQ</strong> and <strong>PostgreSQL</strong>. I build distributed systems and full web/mobile applications covering security (JWT, Keycloak OIDC), generative AI integrations and automated test suites. Over 910 h of software development training at Serratec and UECE. Postgraduate in Software Engineering. Advanced English (B2+), with a C1/C2 programme completed at Wizard. Open to national and international remote roles.
      </p>
    </section>

    <section class="section">
      <h2 class="section-title">KEY ACHIEVEMENTS</h2>
      <table class="ach-table">
        <tr>
          <td class="ach-label">Zeiss AI Recommendation<br>Platform</td>
          <td>Corporate full-stack MVP built with an 11-person team for Zeiss (React 19, TypeScript and Java/Spring Boot 4.1), replacing manual prescription reading with OCR + AI (n8n/RAG) and real-time analytics dashboards.</td>
        </tr>
        <tr>
          <td class="ach-label">FarmFlow &amp; FleetOps<br>(Distributed Systems)</td>
          <td>Event-driven architectures with Transactional Outbox, RabbitMQ, Keycloak OIDC and PostgreSQL (SKIP LOCKED / RLS): FarmFlow (Java 21 Virtual Threads + Offline-First React Native, 2,450 req/s, 549 tests) and FleetOps (.NET 10, 278 ACID RPS, 300 tests).</td>
        </tr>
        <tr>
          <td class="ach-label">Work-Fitness &amp; Portfolio<br>(Live Production Apps)</td>
          <td>Freelance commercial platform (TypeScript, Clean Architecture, Docker/Nginx, 217 tests) and interactive portfolio (Angular 22 Signals, WebGL/Three.js, 195 tests), both scoring 100/100 across all 4 Google Lighthouse categories.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section-title">TECHNICAL SKILLS</h2>
      <table class="skills-table">
        <tr>
          <td class="sk-label">Languages</td>
          <td>Java 21 LTS (Java 17/21) | C# 14 (.NET 10) | TypeScript | JavaScript (ES6+) | Python | SQL</td>
        </tr>
        <tr>
          <td class="sk-label">Frontend &amp; Mobile</td>
          <td>React 18/19 | Angular 22 (Signals, Standalone, OnPush, PWA) | React Native (Expo SDK 54, Offline-First) | Three.js / WebGL | SCSS | Zod | WCAG 2.1 AA/AAA</td>
        </tr>
        <tr>
          <td class="sk-label">Backend &amp; Messaging</td>
          <td>Spring Boot 3/4 (Virtual Threads, WebFlux) | ASP.NET Core (.NET 10) | Django | RabbitMQ (Outbox, CloudEvents, DLQ) | JPA/Hibernate | EF Core 10 | Keycloak OIDC &amp; JWT</td>
        </tr>
        <tr>
          <td class="sk-label">Testing &amp; Observability</td>
          <td>JUnit 5 | xUnit | Vitest | Jest | Playwright (E2E) | Cypress | Axe-Core (WCAG) | k6 (Load Testing) | OpenTelemetry &amp; Jaeger (W3C Tracing)</td>
        </tr>
        <tr>
          <td class="sk-label">Databases</td>
          <td>PostgreSQL 16–18 (Time-Series Partitioning, BRIN Indexes, Fail-Closed RLS, FOR UPDATE SKIP LOCKED, MVCC xmin, 3NF) | MySQL | N+1 Query Optimisation</td>
        </tr>
        <tr>
          <td class="sk-label">DevOps &amp; Tools</td>
          <td>Docker &amp; Docker Compose | Nginx | CI/CD (GitHub Actions &amp; Vercel) | Git | DBeaver | Swagger / OpenAPI 3 | Maven | n8n (OCR &amp; RAG)</td>
        </tr>
        <tr>
          <td class="sk-label">Architecture &amp; Practices</td>
          <td>Clean Architecture | Domain-Driven Design (DDD) | Event-Driven Architecture | Offline-First | SOLID | Agile / Scrum | API-First</td>
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
        <div class="entry-meta">Collaborative (11 devs, 1 PO, 1 SM) | 2026 | React 19 | TypeScript 6 | Styled Components | ApexCharts | Java 17 | Spring Boot 4.1 | PostgreSQL 18 | JWT | n8n (OCR &amp; RAG) - Serratec Final Project · Corporate MVP (contract)</div>
        <ul class="bullets">
          <li>Optical shop sellers were reading prescriptions and choosing lenses by hand, making recommendations inconsistent. The team built a full-stack web platform (<strong>React 19, TypeScript and Styled Components front end; Java 17, Spring Boot 4.1 and PostgreSQL 18 back end</strong>) that streams prescriptions via WebFlux to an OCR and AI pipeline (n8n/RAG), provides assisted Human-in-the-Loop validation with confidence scores and cross-references diopters and lifestyle habits to suggest the right Zeiss lens.</li>
          <li>Interactive analytics dashboards built with <strong>ApexCharts</strong> track conversion rates, temporal trends and seller rankings for store managers and Zeiss headquarters. Stateless JWT authentication backs a three-tier RBAC hierarchy (Zeiss admin, store manager, employee), a sales lifecycle state machine (<code>RECOMMENDED</code>, <code>SOLD</code>, <code>CANCELLED</code>), IP session auditing and full CRUD for stores, products and employees.</li>
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
        <div class="entry-title">FarmFlow - Offline-First Mobile + Distributed Backend - <a href="https://github.com/DevYuriVieira/farmflow-mobile">farmflow-mobile</a> · <a href="https://github.com/DevYuriVieira/farmflow-backend">farmflow-backend</a></div>
        <div class="entry-meta">Personal | 2026 | React Native | Expo SDK 54 | React 19 | Java 21 | Spring Boot 4.1 | Virtual Threads | PostgreSQL 17 | RabbitMQ | Keycloak OIDC | OpenTelemetry</div>
        <ul class="bullets">
          <li>End-to-end agri-tech platform for places where the connection drops mid-field: a <strong>React Native app with an offline-first FIFO mutation queue</strong> and deterministic reconciliation on reconnect, MAPA spray records with a <strong>canvas digital signature hashed with SHA-256</strong>, and IoT telemetry for irrigation pivots and silos.</li>
          <li>A <strong>Java 21 Virtual Threads</strong> backend sustaining <strong>2,450 req/s</strong> in k6 tests with zero 5xx errors, built on the <strong>Transactional Outbox</strong> pattern with RabbitMQ (CloudEvents, DLQ), <code>FOR UPDATE SKIP LOCKED</code>, PostgreSQL 17 with time-series partitioning and fail-closed Row Level Security, and W3C tracing with OpenTelemetry.</li>
          <li>Verifiable quality on both sides: <strong>549 automated tests</strong> (411 backend and 138 mobile across 26 Jest suites), Keycloak OIDC authentication with biometrics in the app and IDOR enumeration protection in the API.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Work-Fitness - Production Commercial Platform - <a href="https://viniciusantos.vercel.app/">viniciusantos.vercel.app</a></div>
        <div class="entry-meta">Freelance (real client) | 2025 - Present | TypeScript 5.7 | Vite 6 | Clean Architecture | Vitest | Playwright | WCAG 2.1 AA | VLibras | Docker | Nginx | GA4 / GTM / Meta Pixel</div>
        <ul class="bullets">
          <li>Commercial platform delivered end to end for a personal trainer, replacing spreadsheets and an untriaged WhatsApp inbox: a body-assessment engine (WHO BMI, Deurenberg body fat, Mifflin-St Jeor BMR) isolated in a <strong>DOM-free Clean Architecture core</strong>, and qualified leads with UTM tags preserved straight into WhatsApp. A <strong>100/100 score in all 4 Lighthouse categories</strong> with a 32 kB bundle.</li>
          <li>Accessibility treated as a requirement (WCAG 2.1 AA, VLibras with no layout shift, bionic reading and colorblind filters), <strong>170 Vitest tests and 47 Playwright specs across 26 viewports</strong>, GA4, GTM and Meta Pixel telemetry, and a multi-stage Docker container served by Nginx.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-title">Personal Portfolio - <a href="https://github.com/DevYuriVieira/portfolio">github.com/DevYuriVieira/portfolio</a> · <a href="https://devyurivieira.vercel.app">devyurivieira.vercel.app</a></div>
        <div class="entry-meta">Personal | 2026 | Angular 22 | TypeScript | Three.js / WebGL | SCSS | Vitest | Playwright | Cypress | PWA | Live in production</div>
        <ul class="bullets">
          <li>Built with <strong>Angular 22</strong> standalone components, native Signals (<code>signal/computed</code>) and <code>OnPush</code> change detection throughout, including a GPU-accelerated <strong>Three.js/WebGL</strong> particle system with mouse and touch interactivity, configured as a PWA with a service worker.</li>
          <li>Covered by <strong>195 automated tests</strong> across three layers (140 Vitest unit tests, 38 Playwright E2E specs with WCAG 2.1 AA/AAA accessibility audits via Axe-Core, 17 Cypress E2E specs), trilingual i18n (PT/EN/ES) and a 100/100/100/100 Google Lighthouse audit on desktop.</li>
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
        <li><strong>Programming in Python (Django) (168 h)</strong> - Senac</li>
        <li><strong>Front-End Development with Artificial Intelligence (80 h)</strong> - Senac</li>
        <li><strong>Software Testing Fundamentals (24 h)</strong> - Instituto de Pesquisas Eldorado</li>
        <li><strong>SQL Database - Intermediate and Advanced</strong> - Instituto Matera</li>
        <li><strong>Philips Full-Stack Developer Bootcamp (Java, Spring Boot, Angular)</strong> - DIO</li>
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
