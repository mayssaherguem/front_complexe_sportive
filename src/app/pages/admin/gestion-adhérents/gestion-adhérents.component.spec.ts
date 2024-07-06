import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdhérentsComponent } from './gestion-adhérents.component';

describe('GestionAdhérentsComponent', () => {
  let component: GestionAdhérentsComponent;
  let fixture: ComponentFixture<GestionAdhérentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdhérentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAdhérentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
