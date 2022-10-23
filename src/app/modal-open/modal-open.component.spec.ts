import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOpenComponent } from './modal-open.component';

describe('ModalOpenComponent', () => {
  let component: ModalOpenComponent;
  let fixture: ComponentFixture<ModalOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
