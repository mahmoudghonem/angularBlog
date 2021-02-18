import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthordetailComponent } from './authordetail.component';

describe('AuthordetailComponent', () => {
  let component: AuthordetailComponent;
  let fixture: ComponentFixture<AuthordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthordetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
