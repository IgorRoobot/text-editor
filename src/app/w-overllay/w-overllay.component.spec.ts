import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOverllayComponent } from './w-overllay.component';

describe('WOverllayComponent', () => {
  let component: WOverllayComponent;
  let fixture: ComponentFixture<WOverllayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOverllayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOverllayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
