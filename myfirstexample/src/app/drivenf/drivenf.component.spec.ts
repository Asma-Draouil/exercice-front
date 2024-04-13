import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenfComponent } from './drivenf.component';

describe('DrivenfComponent', () => {
  let component: DrivenfComponent;
  let fixture: ComponentFixture<DrivenfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrivenfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
