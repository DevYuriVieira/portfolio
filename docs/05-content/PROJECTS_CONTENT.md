# Projects Content & Case Studies

## Purpose

This document centralizes all project descriptions and engineering case studies displayed in the portfolio.

All descriptions follow recruiter-oriented PT-BR storytelling with technical clarity and accuracy.

---

# 1. ZEISS Recommendation Assistant

- **Título**: ZEISS Recommendation Assistant
- **Categoria**: Projeto Profissional (Confidencial)
- **Contexto**: Sistema corporativo desenvolvido durante a Residência Serratec em parceria com a ZEISS para apoiar especialistas comerciais na recomendação inteligente de soluções conforme as necessidades dos clientes.
- **Como foi desenvolvido**: Projeto profissional confidencial desenvolvido em equipe ágil com 11 desenvolvedores, Product Owner e Scrum Master. Atuei no desenvolvimento frontend e na integração entre serviços, respeitando regras de negócio proprietárias da empresa.
- **Destaques técnicos**:
  - Assistente inteligente de recomendação
  - Desenvolvimento Full Stack com React e Spring Boot
  - Banco de dados relacional PostgreSQL
  - Integrações automatizadas com n8n
  - Desenvolvimento em metodologia Scrum
  - Regras de negócio confidenciais
- **Stack**: React, TypeScript, Java, Spring Boot, PostgreSQL, n8n

---

# 2. Spring Boot E-Commerce API

- **Título**: Spring Boot E-Commerce API
- **Categoria**: Backend Java
- **Contexto**: API REST para plataforma de e-commerce responsável pela autenticação, gerenciamento de produtos, categorias e fluxo de compras.
- **Como foi desenvolvido**: Projeto colaborativo desenvolvido utilizando arquitetura em camadas, Spring Boot e Spring Security seguindo boas práticas REST.
- **Destaques técnicos**:
  - Autenticação e autorização via JWT
  - Spring Security para controle de acesso
  - Mapeamento e persistência com JPA/Hibernate
  - Banco de dados relacional PostgreSQL
  - Documentação interativa com Swagger/OpenAPI
  - Endpoints REST para produtos, categorias, pedidos e usuários
- **Stack**: Java 17, Spring Boot 3, Spring Security, PostgreSQL, JPA/Hibernate, Swagger/OpenAPI
- **Links**: GitHub (https://github.com/DevYuriVieira/ecommerce-serratec-api)

---

# 3. Django Full-Stack E-Commerce

- **Título**: Django Full-Stack E-Commerce
- **Categoria**: Full Stack Python/Django
- **Contexto**: Plataforma e-commerce full-stack projetada para simular uma arquitetura real de produção, com desacoplamento de serviços no backend, fluxos assíncronos e estrutura de frontend leve sem frameworks.
- **Como foi desenvolvido**: Projeto autoral desenvolvido em Python/Django e Vanilla JavaScript (ES6+). Implementa o padrão Service Layer para isolamento de domínio, transações atômicas no MySQL, otimização de consultas ORM via `prefetch_related` (Zero N+1), API versionada sem DRF e renderização modular no frontend com `<template>` nativo do HTML5.
- **Destaques técnicos**:
  - Arquitetura MVT desacoplada com padrão Service Layer no Django
  - Processamento assíncrono idempotente de Webhooks de pagamento (`pending -> paid`)
  - Controle de transações atômicas (`transaction.atomic`) para consistência financeira
  - Otimização de consultas ORM com `prefetch_related` eliminando N+1 queries
  - Frontend modular em Vanilla JS (ES6+) com componentização `<template>` do HTML5
  - Segurança contra vulnerabilidades XSS (manipulação via `textContent`) e tokens CSRF
  - Sistema de cupons de desconto, favoritos persistentes por usuário e carrinho dinâmico
- **Stack**: Python, Django, MySQL, Vanilla JS (ES6+), HTML5 `<template>`, REST API, Webhooks Idempotentes, Service Layer
- **Links**: GitHub (https://github.com/DevYuriVieira/django-ecommerce)

---

# 4. Fleet Management System

- **Título**: Fleet Management System
- **Categoria**: Aplicação Frontend
- **Contexto**: Sistema web para gestão operacional de frotas, permitindo acompanhamento de veículos, motoristas e indicadores de operação.
- **Como foi desenvolvido**: Projeto colaborativo utilizando React, TypeScript, Styled Components e arquitetura baseada em componentes reutilizáveis.
- **Destaques técnicos**:
  - Componentização reutilizável em React
  - Tipagem estática com TypeScript
  - Estilização com Styled Components
  - Navegação declarativa com React Router
  - Organização modular e interface responsiva
- **Stack**: React, TypeScript, Styled Components, Vite
- **Links**: GitHub (https://github.com/DevYuriVieira/fleet-management-system), Live Demo (https://fleet-management-system-chi.vercel.app/)

---

# 5. Anime Weather Platform

- **Título**: Anime Weather Platform
- **Categoria**: Frontend + APIs + IA
- **Contexto**: Aplicação que integra dados meteorológicos e informações de animes utilizando APIs públicas e inteligência artificial para recomendações contextualizadas.
- **Como foi desenvolvido**: Projeto desenvolvido em Pair Programming utilizando React, consumo de APIs REST e integração com Google Gemini AI.
- **Destaques técnicos**:
  - Recomendações inteligentes via Google Gemini AI
  - Dados climáticos via OpenWeather API
  - Consumo de dados de animes via Jikan API
  - Engenharia de Prompts para contexto preciso
  - Gerenciamento de estado com React Hooks
- **Stack**: React, TypeScript, Vite, OpenWeather, Jikan API, Google Gemini AI
- **Links**: GitHub (https://github.com/DevYuriVieira/anime-weather-platform)

---

# 6. Bootcamp Management System (Java OOP & Streams)

- **Título**: Bootcamp Management System
- **Categoria**: Backend Java / OOP & Stream API
- **Contexto**: Motor backend em Java 17 puro modelando uma plataforma de treinamento e cursos de tecnologia com aplicação profunda dos pilares de POO (Abstração, Encapsulamento, Herança e Polimorfismo), Java Collections API e Stream API para cálculo dinâmico de XP e ranking de alunos.
- **Como foi desenvolvido**: Projeto autoral desenvolvido no Desafio Santander Bootcamp / DIO para demonstrar domínio de modelagem conceitual orientada a objetos sem acoplamento a frameworks, garantindo unicidade de conteúdos e integridade de matrículas.
- **Destaques técnicos**:
  - Abstração polimórfica via classe base abstrata `Conteudo`, estendida por `Curso` (com carga horária) e `Mentoria` (com data de sessão ao vivo)
  - Gestão de matrículas com `LinkedHashSet` para preservação da ordem cronológica e garantia estrita contra duplicações
  - Processamento funcional declarativo com Java Stream API (`mapToDouble` e `sum`) para cálculo acumulativo de XP
  - Sobrescrita consistente de `equals()` e `hashCode()` baseada na identidade do conteúdo
  - Regras de negócio de progressão e ranking de desenvolvedores sem mutações colaterais
- **Stack**: Java 17, POO (OOP), Collections API, Stream API, LinkedHashSet, Polimorfismo
- **Links**: GitHub (https://github.com/DevYuriVieira/bootcamp-management-system)

---

# 7. Hogwarts Interactive Hub

- **Título**: Hogwarts Interactive Hub
- **Categoria**: Arquitetura Frontend
- **Contexto**: Single Page Application inspirada no universo Harry Potter construída sem frameworks para demonstrar domínio completo das APIs nativas do navegador.
- **Como foi desenvolvido**: Projeto pessoal desenvolvido exclusivamente com Vanilla JavaScript utilizando ES Modules, renderização dinâmica e roteador SPA próprio.
- **Destaques técnicos**:
  - SPA Router próprio sem frameworks
  - Arquitetura modular baseada em ES Modules
  - Renderização dinâmica de componentes no DOM
  - Carregamento assíncrono com Intersection Observer
  - Alternância de tema com Sistema Lumos/Nox
- **Stack**: HTML5, CSS3, JavaScript, ES Modules, LocalStorage
- **Links**: GitHub (https://github.com/DevYuriVieira/Hogwarts-Interactive-Hub), Live Demo (https://devyurivieira.github.io/Hogwarts-Interactive-Hub/)

---

# 8. Prime Grill (Cardápio Digital Interativo)

- **Título**: Prime Grill | Cardápio Digital Interativo
- **Categoria**: Frontend / JavaScript & UX Delivery
- **Contexto**: Cardápio digital moderno e responsivo para churrascaria comercial fictícia inspirado em aplicativos de delivery como o iFood, desenvolvido durante a formação de Front-End com IA no SENAC RJ.
- **Como foi desenvolvido**: Projeto individual desenvolvido com Vanilla JavaScript, HTML5 semântico e CSS3 modular, implementando catálogo com filtros dinâmicos por categoria, carrinho interativo em tempo real e fechamento de pedidos com mensagem estruturada para a API do WhatsApp.
- **Destaques técnicos**:
  - Carrinho de compras interativo com cálculo reativo em tempo real de subtotais e totais
  - Integração direta com API do WhatsApp para fechamento ágil e envio estruturado de pedidos
  - Filtros dinâmicos por categoria (Carnes Nobres, Guarnições, Bebidas, Sobremesas)
  - Carrossel dinâmico de pratos em destaque e microinterações fluidas
  - Arquitetura leve em Vanilla JavaScript sem dependências pesadas, garantindo carregamento sub-segundo
  - Layout totalmente responsivo com foco em UX mobile-first
- **Stack**: JavaScript, HTML5 Semântico, CSS3 Modular, WhatsApp API, UX/UI Design, GitHub Pages
- **Links**: GitHub (https://github.com/DevYuriVieira/Projeto-Front-End), Live Demo (https://devyurivieira.github.io/Projeto-Front-End/)

---

# 9. Modern Fighter Jets

- **Título**: Modern Fighter Jets
- **Categoria**: Frontend React
- **Contexto**: Aplicação React criada para explorar arquitetura de componentes e experiências interativas através de um catálogo moderno de aeronaves militares.
- **Como foi desenvolvido**: Projeto pessoal desenvolvido utilizando React, Styled Components e React Router seguindo arquitetura baseada em componentes reutilizáveis.
- **Destaques técnicos**:
  - Componentização reutilizável em React
  - Comunicação entre componentes via Props
  - Gerenciamento de estado com React Hooks
  - Navegação declarativa com React Router
  - Estilização modular com Styled Components
- **Stack**: React, JavaScript, React Router, Styled Components, Vite
- **Links**: GitHub (https://github.com/DevYuriVieira/modern-fighter-jets), Live Demo (https://modern-fighter-jets.vercel.app/)

---

# 10. Dental Clinic Management System

- **Título**: Dental Clinic Management System
- **Categoria**: Banco de Dados Relacional
- **Contexto**: Projeto de modelagem e implementação de banco de dados para gestão de clínicas odontológicas com foco em consistência e desempenho.
- **Como foi desenvolvido**: Projeto colaborativo com seis desenvolvedores abrangendo levantamento de requisitos, modelagem conceitual, modelagem lógica e implementação em PostgreSQL.
- **Destaques técnicos**:
  - Modelagem Conceitual de Dados (DER)
  - Modelo Lógico Relacional
  - Normalização de dados até a 3ª Forma Normal (3FN)
  - Garantia de Integridade Referencial e Constraints
  - Otimização de performance com Índices
  - Criação de Views e consultas analíticas em SQL
- **Stack**: PostgreSQL, SQL, DDL, DML, DQL
- **Links**: GitHub (https://github.com/DevYuriVieira/dentacare-management-system)

---

# 11. Interactive Authentication UI

- **Título**: Interactive Authentication UI
- **Categoria**: Frontend React
- **Contexto**: Protótipo de autenticação focado em UX Engineering utilizando personagens interativos que respondem dinamicamente às ações do usuário.
- **Como foi desenvolvido**: Projeto pessoal desenvolvido em React utilizando componentes reutilizáveis, CSS Modules e gerenciamento de estados para controlar animações em tempo real.
- **Destaques técnicos**:
  - Rastreamento do cursor para animação dinâmica dos olhos
  - Personagens reativos com estados animados
  - Estilização escopada com CSS Modules
  - Suporte a Dark Mode e alternância de temas
  - Navegação entre fluxos com React Router
- **Stack**: React, Vite, CSS Modules, React Router
- **Links**: GitHub (https://github.com/DevYuriVieira/UXwebsite)