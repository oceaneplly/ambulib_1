import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticulierPage } from './particulier.page';

describe('ParticulierPage', () => {
  let component: ParticulierPage;
  let fixture: ComponentFixture<ParticulierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
