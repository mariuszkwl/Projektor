import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExistComponent } from './no-exist.component';

describe('NoExistComponent', () => {
  let component: NoExistComponent;
  let fixture: ComponentFixture<NoExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
