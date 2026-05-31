import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarsiNG } from './farsi-ng';

describe('FarsiNG', () => {
  let component: FarsiNG;
  let fixture: ComponentFixture<FarsiNG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarsiNG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarsiNG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
