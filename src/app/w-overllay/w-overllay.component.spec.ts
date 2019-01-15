import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOverllayComponent } from './w-overllay.component';
import {TextService} from "../text-service/text.service";

describe('WOverllayComponent', () => {
  let component: WOverllayComponent;
  let fixture: ComponentFixture<WOverllayComponent>;
  let textService: TextService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOverllayComponent ],
      providers: [TextService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOverllayComponent);
    component = fixture.componentInstance;
    textService = TestBed.get(TextService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
