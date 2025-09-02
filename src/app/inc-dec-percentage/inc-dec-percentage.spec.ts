import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecPercentage } from './inc-dec-percentage';

describe('IncDecPercentage', () => {
  let component: IncDecPercentage;
  let fixture: ComponentFixture<IncDecPercentage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncDecPercentage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncDecPercentage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
