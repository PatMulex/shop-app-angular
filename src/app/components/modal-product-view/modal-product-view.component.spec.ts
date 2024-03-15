import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductViewComponent } from './modal-product-view.component';

describe('ModalProductViewComponent', () => {
  let component: ModalProductViewComponent;
  let fixture: ComponentFixture<ModalProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProductViewComponent]
    });
    fixture = TestBed.createComponent(ModalProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
