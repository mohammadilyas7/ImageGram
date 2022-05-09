import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBitComponent } from './flower-bit.component';

describe('FlowerBitComponent', () => {
  let component: FlowerBitComponent;
  let fixture: ComponentFixture<FlowerBitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerBitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
