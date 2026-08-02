import { AboutBlock, EngineeringPrinciple } from './about.model';

export const ABOUT_PARAGRAPHS: readonly string[] = [
  'Sou Engenheiro de Software focado no desenvolvimento de aplicações web completas. Minha atuação abrange desde a construção de interfaces responsivas e funcionais no frontend até a modelagem de APIs REST, bancos de dados e regras de negócio no backend.',
  'Priorizo clareza, manutenibilidade e boas práticas de engenharia em cada projeto. Trabalho com tipagem estática, testes automatizados e arquitetura modular, garantindo que o código seja previsível, organizado e fácil de manter no longo prazo.',
  'Minha formação em Engenharia de Produção agrega uma perspectiva analítica ao ciclo de desenvolvimento. Essa bagagem me auxilia na compreensão clara de requisitos, no mapeamento de fluxos e na otimização de processos antes da implementação.',
] as const;

export const ABOUT_BLOCKS: readonly AboutBlock[] = [
  {
    id: 'who-i-am',
    label: 'Atuação Profissional',
    text: ABOUT_PARAGRAPHS[0],
  },
  {
    id: 'how-i-build',
    label: 'Filosofia de Engenharia',
    text: ABOUT_PARAGRAPHS[1],
  },
  {
    id: 'systemic-differentiator',
    label: 'Visão Sistêmica',
    text: ABOUT_PARAGRAPHS[2],
  },
];

export const ENGINEERING_PRINCIPLES: readonly EngineeringPrinciple[] = [
  {
    id: 'clean-architecture',
    title: 'Arquitetura Limpa & Intenção',
    description:
      'Pensar na arquitetura antes da implementação e compreender a fundo o problema antes de decidir como construí-lo.',
  },
  {
    id: 'communication-first',
    title: 'Comunicação em Primeiro Lugar',
    description:
      'Comunicação clara e transparente como habilidade técnica fundamental. Problemas complexos são resolvidos mais rápido através do alinhamento.',
  },
  {
    id: 'systems-thinking',
    title: 'Visão Sistêmica & Processos',
    description:
      'Mapeamento de fluxos, análise de causa raiz e otimização do início ao fim, enxergando o software como um sistema de produção completo.',
  },
  {
    id: 'maintainability',
    title: 'Código Legível & Manutenível',
    description:
      'Priorizar código limpo, sustentável e fácil de entender por outros desenvolvedores. Código inteligível sempre vence no longo prazo.',
  },
  {
    id: 'value-delivery',
    title: 'Entregas de Valor & Compromisso',
    description:
      'Compreender os objetivos do negócio antes de propor soluções, respeitar prazos e entregar mais valor do que o originalmente solicitado.',
  },
  {
    id: 'simplicity-scalability',
    title: 'Simplicidade & Escalabilidade',
    description:
      'Valorizar soluções simples, performáticas e escaláveis, evitando complexidade desnecessária ou abstrações prematuras.',
  },
];

