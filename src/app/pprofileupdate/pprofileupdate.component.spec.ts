import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PprofileupdateComponent } from './pprofileupdate.component';

describe('PprofileupdateComponent', () => {
  let component: PprofileupdateComponent;
  let fixture: ComponentFixture<PprofileupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PprofileupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
