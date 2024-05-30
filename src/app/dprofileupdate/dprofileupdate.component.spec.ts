import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprofileupdateComponent } from './dprofileupdate.component';

describe('DprofileupdateComponent', () => {
  let component: DprofileupdateComponent;
  let fixture: ComponentFixture<DprofileupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DprofileupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
