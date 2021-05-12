import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycHydComponent } from './myc-hyd.component';

describe('MycHydComponent', () => {
  let component: MycHydComponent;
  let fixture: ComponentFixture<MycHydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycHydComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycHydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
