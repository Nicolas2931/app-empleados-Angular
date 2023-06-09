import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeladoHijoComponent } from './empelado-hijo.component';

describe('EmpeladoHijoComponent', () => {
  let component: EmpeladoHijoComponent;
  let fixture: ComponentFixture<EmpeladoHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpeladoHijoComponent]
    });
    fixture = TestBed.createComponent(EmpeladoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
