import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSelligCardComponent } from './best-sellig-card.component';

describe('BestSelligCardComponent', () => {
  let component: BestSelligCardComponent;
  let fixture: ComponentFixture<BestSelligCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSelligCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSelligCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
