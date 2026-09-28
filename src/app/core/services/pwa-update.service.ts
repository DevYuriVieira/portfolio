import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';

/** Intervalo de polling para verificar updates do SW (5 minutos) */
const UPDATE_POLL_MS = 5 * 60 * 1000;

@Injectable({
  providedIn: 'root',
})
export class PwaUpdateService {
  private readonly swUpdate = inject(SwUpdate);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.initAutoUpdate();
  }

  private initAutoUpdate(): void {
    if (!isPlatformBrowser(this.platformId) || !this.swUpdate.isEnabled) {
      return;
    }

    // Ativa a nova versão do SW imediatamente e recarrega para garantir os novos assets
    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.swUpdate.activateUpdate().then(() => {
          document.location.reload();
        });
      });

    // Verifica imediatamente na inicialização (captura cache desatualizado no primeiro acesso)
    this.checkForUpdate();

    // Polling a cada 5 minutos para tabs abertas por longo tempo também receberem updates
    interval(UPDATE_POLL_MS)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.checkForUpdate());

    // Verifica também quando o usuário retorna à aba (tab inativa não recebe polling)
    const handleFocus = (): void => {
      this.checkForUpdate();
    };
    window.addEventListener('focus', handleFocus);
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('focus', handleFocus);
    });
  }

  public checkForUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().catch(() => {});
    }
  }
}
