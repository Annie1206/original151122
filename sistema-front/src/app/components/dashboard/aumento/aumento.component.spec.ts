import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AumentoComponent } from './aumento.component';

describe('AumentoComponent', () => {
  let component: AumentoComponent;
  let fixture: ComponentFixture<AumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
