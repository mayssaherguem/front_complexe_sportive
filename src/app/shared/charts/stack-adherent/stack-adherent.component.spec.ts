import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackAdherentComponent } from './stack-adherent.component';

describe('StackAdherentComponent', () => {
  let component: StackAdherentComponent;
  let fixture: ComponentFixture<StackAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackAdherentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
