import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerrainPadelComponent } from './gestion-terrain-padel.component';

describe('GestionTerrainPadelComponent', () => {
  let component: GestionTerrainPadelComponent;
  let fixture: ComponentFixture<GestionTerrainPadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTerrainPadelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTerrainPadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
