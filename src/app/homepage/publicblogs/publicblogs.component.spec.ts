import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicblogsComponent } from './publicblogs.component';

describe('PublicblogsComponent', () => {
  let component: PublicblogsComponent;
  let fixture: ComponentFixture<PublicblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
