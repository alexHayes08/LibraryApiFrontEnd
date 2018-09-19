import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToSeleniumComponent } from './intro-to-selenium.component';

describe('IntroToSeleniumComponent', () => {
  let component: IntroToSeleniumComponent;
  let fixture: ComponentFixture<IntroToSeleniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToSeleniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToSeleniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
