import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHistoryComponent } from './routing-history.component';

describe('RoutingHistoryComponent', () => {
  let component: RoutingHistoryComponent;
  let fixture: ComponentFixture<RoutingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
