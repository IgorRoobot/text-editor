import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let titleEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    titleEl = fixture.debugElement.query(By.css("span"));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input title', () => {
    let title = component.title;
    fixture.detectChanges();
    expect(titleEl.nativeElement.textContent.trim()).toBe(title);
  });
});
