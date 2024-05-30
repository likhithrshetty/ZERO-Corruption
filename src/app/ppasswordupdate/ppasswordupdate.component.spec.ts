import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpasswordupdateComponent } from './ppasswordupdate.component';

describe('PpasswordupdateComponent', () => {
  let component: PpasswordupdateComponent;
  let fixture: ComponentFixture<PpasswordupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpasswordupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpasswordupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
