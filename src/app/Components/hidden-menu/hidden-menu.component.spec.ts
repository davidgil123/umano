import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenMenuComponent } from './hidden-menu.component';

describe('HiddenMenuComponent', () => {
  let component: HiddenMenuComponent;
  let fixture: ComponentFixture<HiddenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
