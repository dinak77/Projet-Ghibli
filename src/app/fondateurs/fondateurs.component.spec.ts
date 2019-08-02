import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondateursComponent } from './fondateurs.component';

describe('FondateursComponent', () => {
  let component: FondateursComponent;
  let fixture: ComponentFixture<FondateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
