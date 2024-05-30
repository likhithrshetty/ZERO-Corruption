import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpasswordupdateComponent } from './dpasswordupdate.component';

describe('DpasswordupdateComponent', () => {
  let component: DpasswordupdateComponent;
  let fixture: ComponentFixture<DpasswordupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpasswordupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpasswordupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
