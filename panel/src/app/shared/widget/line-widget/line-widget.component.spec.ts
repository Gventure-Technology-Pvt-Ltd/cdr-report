import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWidgetComponent } from './line-widget.component';

describe('LineWidgetComponent', () => {
  let component: LineWidgetComponent;
  let fixture: ComponentFixture<LineWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
