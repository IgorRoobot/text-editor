import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './text-service/text.service';
import { WOverllayComponent } from './w-overllay/w-overllay.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    WOverllayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
