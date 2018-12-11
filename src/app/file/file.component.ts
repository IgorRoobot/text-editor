import { Component, OnInit, HostListener } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public text:Array<any> = [];
  public selectedComponent:any = null;

  constructor(private textService: TextService) {
  }

  change(style) {
    this.selectedComponent;
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => {
      this.splitText(result);
    });
  }

  someFun(event) {
    this.selectedComponent = event.target;
  }

  splitText(text) {
    const textArr = text.split(" ");
    this.text = textArr;
  }
}
