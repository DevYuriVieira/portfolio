import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';
import { CONTACT_SECTION_DATA } from './contact.data';
import { ContactSection } from './contact';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should expose contact data correctly', () => {
    expect(component.data().title).toBe(CONTACT_SECTION_DATA.title);
    expect(component.data().info.email).toBe(CONTACT_SECTION_DATA.info.email);
    expect(component.data().info.location).toBe(CONTACT_SECTION_DATA.info.location);
    expect(component.data().info.whatsappUrl).toContain('wa.me/5522998962216');
  });

  it('should start with copied signal set to false', () => {
    expect(component.copied()).toBe(false);
  });

  it('should construct valid emailUrl and mailtoUrl', () => {
    expect(component.emailUrl).toContain('https://mail.google.com/mail/');
    expect(component.emailUrl).toContain(component.data().info.email);
    expect(component.mailtoUrl).toBe('mailto:' + component.data().info.email);
  });

  it('should track WhatsApp clicks when onWhatsAppClick is called', () => {
    component.onWhatsAppClick();
    expect(component.data().info.whatsappUrl).toContain('5522998962216');
  });

  it('should render location badge, availability pulse and social chips with brand links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const locationText = compiled.querySelector('.contact__location-text');
    expect(locationText?.textContent?.trim()).toBe(component.data().info.location);

    const pulseDot = compiled.querySelector('.contact__whatsapp-pulse .contact__status-dot');
    expect(pulseDot).toBeTruthy();

    const availabilityIcon = compiled.querySelector('.contact__availability-icon');
    expect(availabilityIcon).toBeTruthy();

    const whatsappHighlight = compiled.querySelector('.contact__whatsapp-highlight');
    expect(whatsappHighlight).toBeTruthy();
    expect(whatsappHighlight?.textContent).toContain(component.data().labels.whatsappHighlightLabel);
    expect(whatsappHighlight?.textContent).toContain(component.data().labels.whatsappHighlightText);

    const chips = compiled.querySelectorAll('.contact__social-chip');
    expect(chips.length).toBe(2);

    const linkedin = compiled.querySelector('.contact__social-chip--linkedin') as HTMLAnchorElement;
    expect(linkedin.href).toContain('linkedin.com');

    const github = compiled.querySelector('.contact__social-chip--github') as HTMLAnchorElement;
    expect(github.href).toContain('github.com');
  });
});
