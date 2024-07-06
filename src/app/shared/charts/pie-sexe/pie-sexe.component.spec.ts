import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSexeComponent } from './pie-sexe.component';

describe('PieSexeComponent', () => {
  let component: PieSexeComponent;
  let fixture: ComponentFixture<PieSexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieSexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
