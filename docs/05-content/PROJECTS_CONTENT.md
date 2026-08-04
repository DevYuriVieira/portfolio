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

# 6. Payroll System (Sistema de Folha de Pagamento)

- **Título**: Sistema de Folha de Pagamento (Payroll System)
- **Categoria**: Backend Java / Arquitetura MVC+DAO
- **Contexto**: Sistema backend para processamento automatizado em lote de folha de pagamento, cálculo de alíquotas progressivas de INSS e Imposto de Renda (IRRF) conforme a legislação vigente, desenvolvido durante a Residência em TIC Serratec 2026.1 (Turma 36 Nova Friburgo).
- **Como foi desenvolvido**: Projeto colaborativo desenvolvido em equipe de 4 desenvolvedores (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia e Ícaro Pinheiro) em Java 17 puro (sem frameworks ORM) aplicando arquitetura MVC + DAO, persistência via JDBC no PostgreSQL, exceções customizadas de domínio e manipulação I/O defensiva de arquivos CSV.
- **Destaques técnicos**:
  - Arquitetura em camadas MVC + DAO em Java 17 sem dependência de ORM
  - Cálculo progressivo automatizado de INSS e IRRF com deduções por dependente
  - Precisão financeira exata com `BigDecimal` e `RoundingMode.HALF_UP`
  - Padrão Singleton no gerenciador de conexões JDBC (`ConexaoBancoDados`)
  - Tratamento de exceções customizadas de domínio (`CpfInvalidoException`, `DependenteSemTitularException`, `SalarioInvalidoException`)
  - Leitura e exportação automatizada de relatórios em arquivos CSV (`CsvReader`, `CsvWriter`)
  - Modelo relacional normalizado no PostgreSQL (`departamento`, `funcionario`, `dependente`, `folha_pagamento`)
- **Stack**: Java 17, PostgreSQL, JDBC, MVC, DAO, BigDecimal, Singleton Pattern
- **Links**: GitHub (https://github.com/DevYuriVieira/payroll-system-java)

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

# 8. Kuro Seafood E-Commerce

- **Título**: Kuro Seafood E-Commerce
- **Categoria**: Frontend E-commerce (MPA)
- **Contexto**: Plataforma e-commerce B2C/B2B de pescados premium construída durante a Residência em TIC Serratec 2026.1 (Turma 36 Nova Friburgo) em arquitetura Multi-Page (MPA) sem frameworks, simulando uma experiência completa de compras de nível de produção.
- **Como foi desenvolvido**: Projeto colaborativo desenvolvido em equipe de 4 desenvolvedores (Yuri Vieira, Yasmim Veríssimo, Gabriel Maia e Ícaro Pinheiro) com módulos JS isolados por funcionalidade (`cart.js`, `auth.js`, `catalogo.js`, `admin.js`, `checkout.js`, `dashboard-crud.js`), consumo de APIs assíncronas (`async/await`) e renderização via template literals.
- **Destaques técnicos**:
  - Arquitetura Multi-Page (MPA) em Vanilla JS (ES6+) eliminando overhead de frameworks
  - Painel administrativo privado com CRUD completo de produtos (Create, Read, Update, Delete) via MockAPI
  - Carrinho offcanvas persistente com controle de estado cliente-side via LocalStorage
  - Cálculo de frete e preenchimento de endereço em tempo real via ViaCEP REST API
  - Regras automáticas de desconto para vendas no atacado (> R$ 500 ou > 5kg)
  - Sistema de busca e filtragem dinâmica de catálogo via URL Query Strings
  - Design responsivo Mobile-First construído do zero com Bootstrap 5.3 e CSS3
- **Stack**: Vanilla JS (ES6+), HTML5, CSS3, Bootstrap 5.3, ViaCEP API, MockAPI, LocalStorage
- **Links**: GitHub (https://github.com/DevYuriVieira/kuro-seafood-ecommerce), Live Demo (https://kuro-seafood-ecommerce.vercel.app/)

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