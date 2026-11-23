import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { I18nService } from '@core';
import { CommandPalette } from './command-palette';

describe('CommandPalette', () => {
  let component: CommandPalette;
  let fixture: ComponentFixture<CommandPalette>;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.setItem('portfolio-lang', 'pt-BR');
    await TestBed.configureTestingModule({
      imports: [CommandPalette],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandPalette);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create closed by default', () => {
    expect(component).toBeTruthy();
    expect(component.isOpen()).toBe(false);
  });

  it('should toggle open via Ctrl+K and close on Escape', () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
    fixture.detectChanges();
    expect(component.isOpen()).toBe(true);

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(component.isOpen()).toBe(false);
  });

  it('should filter commands by keyword and allow switching language', () => {
    component.open();
    component.query.set('english');
    fixture.detectChanges();

    const matches = component.filteredItems();
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((m) => m.id === 'lang-en')).toBe(true);

    const enCmd = matches.find((m) => m.id === 'lang-en')!;
    component.executeItem(enCmd);
    expect(i18n.currentLang()).toBe('en');
    expect(component.isOpen()).toBe(false);
  });
});
