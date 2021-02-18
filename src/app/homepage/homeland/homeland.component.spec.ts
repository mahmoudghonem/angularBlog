import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelandComponent } from './homeland.component';

describe('HomelandComponent', () => {
  let component: HomelandComponent;
  let fixture: ComponentFixture<HomelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
