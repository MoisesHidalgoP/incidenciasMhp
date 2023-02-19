import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRevisionIncidenciasComponent } from './detalle-revision-incidencias.component';

describe('DetalleRevisionIncidenciasComponent', () => {
  let component: DetalleRevisionIncidenciasComponent;
  let fixture: ComponentFixture<DetalleRevisionIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRevisionIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRevisionIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
