import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPercentage } from './to-percentage';

describe('ToPercentage', () => {
  let component: ToPercentage;
  let fixture: ComponentFixture<ToPercentage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToPercentage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToPercentage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
