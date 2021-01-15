import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavebarComponent } from './main-navebar.component';

describe('MainNavebarComponent', () => {
  let component: MainNavebarComponent;
  let fixture: ComponentFixture<MainNavebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
