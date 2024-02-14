import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametresAmbuPage } from './parametres-ambu.page';

describe('ParametresAmbuPage', () => {
  let component: ParametresAmbuPage;
  let fixture: ComponentFixture<ParametresAmbuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParametresAmbuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
