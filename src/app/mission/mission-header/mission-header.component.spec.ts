import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionHeaderComponent } from './mission-header.component';

describe('MissionHeaderComponent', () => {
  let component: MissionHeaderComponent;
  let fixture: ComponentFixture<MissionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
