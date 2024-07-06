import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPoolComponent } from './gestion-pool.component';

describe('GestionPoolComponent', () => {
  let component: GestionPoolComponent;
  let fixture: ComponentFixture<GestionPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
