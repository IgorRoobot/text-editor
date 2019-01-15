import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelComponent } from './control-panel.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('ControlPanelComponent', () => {
  let component: ControlPanelComponent;
  let fixture: ComponentFixture<ControlPanelComponent>;
  let boldEl: DebugElement;
  let italicEl: DebugElement;
  let underlineEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelComponent);
    component = fixture.componentInstance;
    boldEl = fixture.debugElement.query(By.css("button[name=bold]"));
    italicEl = fixture.debugElement.query(By.css("button[name=italic]"));
    underlineEl = fixture.debugElement.query(By.css("button[name=underline]"));
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('event click on Bold formatting button', () => {
    let event;
    component.controlEvent.subscribe((value) => event = value);
    boldEl.triggerEventHandler('click', null);
    component.click(null, 'Bold');
    expect(event.style).toBe('Bold');
  });

  it('event click on Italic formatting button', () => {
    let event;
    component.controlEvent.subscribe((value) => event = value);
    boldEl.triggerEventHandler('click', null);
    component.click(null, 'Italic');
    expect(event.style).toBe('Italic');
  });

  it('event click on Underline formatting button', () => {
    let event;
    component.controlEvent.subscribe((value) => event = value);
    boldEl.triggerEventHandler('click', null);
    component.click(null, 'Underline');
    expect(event.style).toBe('Underline');
  });
});
