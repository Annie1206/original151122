import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPrestacionesComponent } from './vista-prestaciones.component';

describe('VistaPrestacionesComponent', () => {
  let component: VistaPrestacionesComponent;
  let fixture: ComponentFixture<VistaPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
