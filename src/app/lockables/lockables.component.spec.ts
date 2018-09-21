import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockablesComponent } from './lockables.component';

describe('LockablesComponent', () => {
  let component: LockablesComponent;
  let fixture: ComponentFixture<LockablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
