import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcreateComponent } from './blogcreate.component';

describe('BlogcreateComponent', () => {
  let component: BlogcreateComponent;
  let fixture: ComponentFixture<BlogcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
