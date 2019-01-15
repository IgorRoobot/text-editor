import {Component, OnInit, HostListener, AfterContentInit} from '@angular/core';
import { TextService } from '../text-service/text.service';
import { SynonymsService } from '../synonyms.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, AfterContentInit {
  public text:Array<any> = [];
  public selectedComponent:any = null;
  public style: string = '';
  public toggle: boolean = false;
  public synonyms: any;

  constructor(private textService: TextService,
              private synService: SynonymsService) {
  }

  change(style){
    this.style = style;
    switch(style) {
      case 'Bold':
        this.selectedComponent.style.fontWeight=style;
        break;
      case 'Italic':
        this.selectedComponent.style.fontStyle=style;
        break;
      case 'Underline':
        this.selectedComponent.style.textDecoration=style;   
        break;
      default:
        this.selectedComponent.style.color='black';   
        break;
    }
    return this.style;
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => {
      return result;
    });
  }
  ngAfterContentInit() {
    this.textService.getMockText().then((result) => {
      this.splitText(result);
    });
  }

  someFun(target) {
    let syn;
    this.selectedComponent = target;
    this.selectedComponent.style.color = "blue";
    this.synService.getSynonyms(this.selectedComponent.textContent.trim().replace(/[\.\,]/g, "")).subscribe(res => {
      this.synonyms = syn = res;
    });
    return syn || this.synonyms;
  }

  splitText(text) {
    const textArr = text.split(" ");
    this.text = textArr;
    return this.text;
  }

  selectedWord(word) {
    this.selectedComponent.textContent = word;
  }
}
