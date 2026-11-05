import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { I18nService } from '@core';
import { Heading, Text } from '@ui';
import { FARMFLOW_MODAL_DATA } from './farmflow-modal.data';

export type FarmFlowTab =
  | 'overview'
  | 'offline'
  | 'messaging'
  | 'regulatory'
  | 'benchmarks'
  | 'readme';

@Component({
  selector: 'app-farmflow-modal',
  standalone: true,
  imports: [Heading, Text],
  templateUrl: './farmflow-modal.html',
  styleUrl: './farmflow-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmFlowModal {
  @Output() close = new EventEmitter<void>();

  private readonly i18n = inject(I18nService);

  readonly activeLang = computed<'pt-BR' | 'en'>(() =>
    this.i18n.currentLang() === 'en' ? 'en' : 'pt-BR'
  );
  readonly activeTab = signal<FarmFlowTab>('overview');
  readonly copied = signal<boolean>(false);
  readonly markdownContent = computed<string>(() => this.generateMarkdownDossier());

  readonly data = computed(() => FARMFLOW_MODAL_DATA[this.activeLang()]);

  setLanguage(lang: 'pt-BR' | 'en'): void {
    this.i18n.setLang(lang);
  }

  setTab(tab: FarmFlowTab): void {
    this.activeTab.set(tab);
  }

  private generateMarkdownDossier(): string {
    const d = this.data();
    const isEn = this.activeLang() === 'en';

    const lines: string[] = [
      `# ${d.modalTitle}`,
      `> ${d.modalSubtitle}`,
      `> Mobile Repo: ${d.mobileGithubUrl}`,
      `> Backend Repo: ${d.backendGithubUrl}`,
      '',
      `## 1. ${isEn ? 'Executive Engineering Summary' : 'Resumo Executivo de Engenharia'}`,
      `| ${isEn ? 'Area' : 'Área'} | ${isEn ? 'Implementation' : 'Implementação no FarmFlow'} |`,
      '| :--- | :--- |',
      ...d.executiveSummary.map((row) => `| **${row.area}** | ${row.implementation} |`),
      '',
      `## 2. ${isEn ? 'Delimited Bounded Contexts (DDD Aggregates)' : 'Contextos Delimitados (Agregados DDD)'}`,
      ...d.domainContexts.flatMap((ctx) => [
        `### ${ctx.name} — ${ctx.title}`,
        ...ctx.invariants.map((inv) => `- ${inv}`),
        '',
      ]),
      `## 3. ${isEn ? 'Distributed Failure & Resilience Matrix' : 'Matriz de Resiliência a Cenários de Falha Distribuídos'}`,
      `| ${isEn ? 'Failure Scenario' : 'Cenário de Falha'} | ${isEn ? 'System Behavior' : 'Comportamento do Sistema'} | ${isEn ? 'Architectural Guarantee' : 'Garantia Arquitetural'} |`,
      '| :--- | :--- | :--- |',
      ...d.failureScenarios.map(
        (sc) => `| **${sc.scenario}** | ${sc.behavior} | \`${sc.guarantee}\` |`
      ),
      '',
      `## 4. ${isEn ? 'Empirical Capacity Benchmarks (k6 Virtual Threads)' : 'Benchmarks de Capacidade Empírica (k6 Virtual Threads)'}`,
      `| Workload | Concurrency | Requests | Throughput | P50 | P90 | P95 | Max | Errors | Verdict |`,
      '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
      ...d.benchmarks.map(
        (b) =>
          `| **${b.workload}** | ${b.concurrency} | ${b.requests} | **${b.throughput}** | ${b.p50} | ${b.p90} | ${b.p95} | ${b.max} | ${b.errors} | \`${b.verdict}\` |`
      ),
      '',
      `## 5. ${isEn ? 'Architecture Decision Records (14 ADRs)' : 'Registros de Decisão de Arquitetura (14 ADRs)'}`,
      `| Code | Title | Status | Architectural Focus |`,
      '| :--- | :--- | :--- | :--- |',
      ...d.adrs.map(
        (adr) => `| \`${adr.code}\` | **${adr.title}** | ${adr.status} | ${adr.focus} |`
      ),
      '',
      `## 6. ${isEn ? 'SRE Runbooks & Service Level Objectives (SLOs)' : 'Runbooks SRE & Objetivos de Nível de Serviço (SLOs)'}`,
      ...d.runbooks.map((rb) => `- **${rb.name}** (${rb.trigger}): ${rb.mitigation}`),
      '',
      `| Service / Flow | SLI | Target SLO | Error Budget |`,
      '| :--- | :--- | :--- | :--- |',
      ...d.slos.map(
        (slo) =>
          `| **${slo.service}** | ${slo.sli} | \`${slo.target}\` | ${slo.budget} |`
      ),
      '',
      `## 7. ${isEn ? 'Core REST Endpoints' : 'Endpoints REST Principais'}`,
      ...d.endpointCategories.flatMap((cat) => [
        `### ${cat.category} (${cat.roles})`,
        '| Method | Route | Purpose | Success |',
        '| :--- | :--- | :--- | :--- |',
        ...cat.endpoints.map(
          (ep) => `| \`${ep.method}\` | \`${ep.route}\` | ${ep.purpose} | ${ep.success} |`
        ),
        '',
      ]),
    ];

    return lines.join('\n');
  }

  async copyMarkdown(): Promise<void> {
    try {
      const text = this.markdownContent();
      if (text && typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    } catch {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }
  }

  downloadDossier(): void {
    try {
      const text = this.markdownContent();
      const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `farmflow-ecosystem-dossier-${this.activeLang().toLowerCase()}.md`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {}
  }

  onBackdropClick(event: MouseEvent): void {
    if (
      (event.target as HTMLElement).classList.contains('farmflow-modal-backdrop')
    ) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }
}

