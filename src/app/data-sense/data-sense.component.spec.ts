import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSenseComponent } from './data-sense.component';

describe('DataSenseComponent', () => {
  let component: DataSenseComponent;
  let fixture: ComponentFixture<DataSenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSenseComponent]
    });
    fixture = TestBed.createComponent(DataSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
