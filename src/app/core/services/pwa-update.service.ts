import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';

/** Interval to poll for SW updates (5 minutes) */
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

    // Activate new SW version immediately and reload to pick up new assets
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

    // Check immediately on app start (catches first-load stale cache)
    this.checkForUpdate();

    // Poll every 5 minutes so long-running tabs also get updates
    interval(UPDATE_POLL_MS)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.checkForUpdate());

    // Also check when user returns to the tab
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
