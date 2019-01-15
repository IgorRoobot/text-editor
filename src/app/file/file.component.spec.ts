import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { FileComponent } from './file.component';
import { TextService } from '../text-service/text.service';
import {WOverllayComponent} from "../w-overllay/w-overllay.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {text} from "@angular/core/src/render3/instructions";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {SynonymsService} from "../synonyms.service";

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;
  let textService: TextService;
  let synService: SynonymsService;
  let textEl: DebugElement;
  let selectWord: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        FileComponent,
        WOverllayComponent
      ],
      providers: [TextService, SynonymsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    textService = TestBed.get(TextService);
    synService = TestBed.get(SynonymsService);

    textEl = fixture.debugElement.query(By.css("span"));
    selectWord = fixture.debugElement.query(By.css('span'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resolve promise to get text', async(() => {

    let someText = "A  year  ago  I  was  in  the  audience  at  a  gathering  of  designers  in  San  Francisco.  There  were  four  designers  on  stage,  and  two  of  them  worked  for  me.  I  was  there  to  support  them.  The  topic  of  design  responsibility  came  up,  possibly  brought  up  by  one  of  my  designers,  I  honestly  don’t  remember  the  details.  What  I  do  remember  is  that  at  some  point  in  the  discussion  I  raised  my  hand  and  suggested,  to  this  group  of  designers,  that  modern  design  problems  were  very  complex.  And  we  ought  to  need  a  license  to  solve  them.";
    let splitedText;
    let arrayStyles = ['Bold', 'Italic', 'Underline', 'other'];


    fixture.detectChanges();
    spyOn(textService, 'getMockText').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(textEl.nativeElement.textContent.trim()).toBe(someText);
      expect(splitedText).toBeTruthy();

      component.someFun(selectWord.childNodes[2].nativeNode);

      fixture.detectChanges();

      let selectedWord = selectWord.childNodes[2].nativeNode.textContent.trim();
      component.selectedWord(selectedWord);
      expect(component.selectedComponent.textContent)
        .toEqual(selectedWord);

      expect(component.someFun).toBeTruthy();

      for(let i = 0; i < arrayStyles.length; i++) {
        component.change(arrayStyles[i]);
        fixture.detectChanges();
        expect(component.change(arrayStyles[i])).toEqual(arrayStyles[i]);
      }
    });
    component.ngOnInit();
    splitedText = component.splitText(someText);

  }));
});
