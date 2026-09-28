import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

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

    // Automatically activate new versions deployed to production
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

    // Check for updates when user refocuses the browser window
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
