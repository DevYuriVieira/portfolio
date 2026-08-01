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
    expect(component.data.title).toBe(CONTACT_SECTION_DATA.title);
    expect(component.data.info.email).toBe(CONTACT_SECTION_DATA.info.email);
    expect(component.data.info.location).toBe(CONTACT_SECTION_DATA.info.location);
  });

  it('should start with copied signal set to false', () => {
    expect(component.copied()).toBe(false);
  });
});
