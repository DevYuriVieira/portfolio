import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { PwaUpdateService } from './pwa-update.service';

describe('PwaUpdateService', () => {
  let service: PwaUpdateService;
  let versionUpdates$: Subject<any>;
  let mockSwUpdate: any;

  beforeEach(() => {
    versionUpdates$ = new Subject();
    mockSwUpdate = {
      isEnabled: true,
      versionUpdates: versionUpdates$.asObservable(),
      activateUpdate: vitest.fn().mockResolvedValue(true),
      checkForUpdate: vitest.fn().mockResolvedValue(true),
    };

    TestBed.configureTestingModule({
      providers: [
        PwaUpdateService,
        { provide: SwUpdate, useValue: mockSwUpdate },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });

    service = TestBed.inject(PwaUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call checkForUpdate when swUpdate is enabled', () => {
    service.checkForUpdate();
    expect(mockSwUpdate.checkForUpdate).toHaveBeenCalled();
  });

  it('should activate update when VERSION_READY is emitted', async () => {
    versionUpdates$.next({ type: 'VERSION_READY', currentVersion: {}, latestVersion: {} });
    expect(mockSwUpdate.activateUpdate).toHaveBeenCalled();
  });

  it('should ignore other version update events like VERSION_DETECTED', () => {
    versionUpdates$.next({ type: 'VERSION_DETECTED', version: {} });
    expect(mockSwUpdate.activateUpdate).not.toHaveBeenCalled();
  });
});
