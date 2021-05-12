import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycMyrComponent } from './myc-myr.component';

describe('MycMyrComponent', () => {
  let component: MycMyrComponent;
  let fixture: ComponentFixture<MycMyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycMyrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycMyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
