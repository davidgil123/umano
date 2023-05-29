import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveOptionsComponent } from './interactive-options.component';

describe('InteractiveOptionsComponent', () => {
  let component: InteractiveOptionsComponent;
  let fixture: ComponentFixture<InteractiveOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
