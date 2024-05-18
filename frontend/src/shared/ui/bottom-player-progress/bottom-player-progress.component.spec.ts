import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPlayerProgressComponent } from './bottom-player-progress.component';

describe('BottomPlayerProgressComponent', () => {
  let component: BottomPlayerProgressComponent;
  let fixture: ComponentFixture<BottomPlayerProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomPlayerProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomPlayerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
