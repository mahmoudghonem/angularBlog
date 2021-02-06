import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUnsignComponent } from './navbar-unsign.component';

describe('NavbarUnsignComponent', () => {
  let component: NavbarUnsignComponent;
  let fixture: ComponentFixture<NavbarUnsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUnsignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
