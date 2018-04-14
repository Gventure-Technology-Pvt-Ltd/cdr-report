import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointWidgetComponent } from './point-widget.component';

describe('PointWidgetComponent', () => {
  let component: PointWidgetComponent;
  let fixture: ComponentFixture<PointWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
