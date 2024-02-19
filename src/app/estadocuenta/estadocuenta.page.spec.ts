import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadocuentaPage } from './estadocuenta.page';

describe('EstadocuentaPage', () => {
  let component: EstadocuentaPage;
  let fixture: ComponentFixture<EstadocuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstadocuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
