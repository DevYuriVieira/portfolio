import { EngineeringPrinciple } from './about.model';

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
