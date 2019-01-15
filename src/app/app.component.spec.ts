import {TestBed, async, tick, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FileComponent } from './file/file.component';
import { TextService } from './text-service/text.service';
import {WOverllayComponent} from "./w-overllay/w-overllay.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SynonymsService} from "./synonyms.service";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {

  let component: AppComponent;
  // let controlPanel: ControlPanelComponent;
  // let controlPanelFixture: ComponentFixture<ControlPanelComponent>;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent,
        ControlPanelComponent,
        HeaderComponent,
        FileComponent,
        WOverllayComponent
      ],
      providers: [TextService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Simple Text Editor'`,() => {
    expect(component.title).toEqual('Simple Text Editor');
  });

});
