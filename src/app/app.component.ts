import { Component, ViewChild } from '@angular/core';
import { FileComponent } from 'src/app/file/file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Text Editor';
  @ViewChild(FileComponent) fileComponentLink: FileComponent;

  getControlEvent(style:string) {
    return this.fileComponentLink.change(style);
  }
}
