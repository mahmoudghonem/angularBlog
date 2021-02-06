import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowblogsComponent } from './followblogs.component';

describe('FollowblogsComponent', () => {
  let component: FollowblogsComponent;
  let fixture: ComponentFixture<FollowblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
