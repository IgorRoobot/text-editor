import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-w-overllay',
  templateUrl: './w-overllay.component.html',
  styleUrls: ['./w-overllay.component.css']
})
export class WOverllayComponent implements OnInit {

  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    // console.log(event.target['textContent']);
  }

 

  constructor() { }

  ngOnInit() {
  }

}
