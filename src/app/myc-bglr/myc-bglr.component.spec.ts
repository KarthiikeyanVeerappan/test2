import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycBglrComponent } from './myc-bglr.component';

describe('MycBglrComponent', () => {
  let component: MycBglrComponent;
  let fixture: ComponentFixture<MycBglrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycBglrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycBglrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
