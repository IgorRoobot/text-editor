import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Output()
  controlEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  click($event, style) {
    return this.controlEvent.emit({$event, style});
  }
}
