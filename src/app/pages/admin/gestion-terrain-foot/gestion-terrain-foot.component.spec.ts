import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerrainFootComponent } from './gestion-terrain-foot.component';

describe('GestionTerrainFootComponent', () => {
  let component: GestionTerrainFootComponent;
  let fixture: ComponentFixture<GestionTerrainFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTerrainFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTerrainFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
