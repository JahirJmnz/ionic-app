import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionpbPage } from './descripcionpb.page';

describe('DescripcionpbPage', () => {
  let component: DescripcionpbPage;
  let fixture: ComponentFixture<DescripcionpbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionpbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
