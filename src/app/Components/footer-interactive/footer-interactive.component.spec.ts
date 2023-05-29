import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInteractiveComponent } from './footer-interactive.component';

describe('FooterInteractiveComponent', () => {
  let component: FooterInteractiveComponent;
  let fixture: ComponentFixture<FooterInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterInteractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
