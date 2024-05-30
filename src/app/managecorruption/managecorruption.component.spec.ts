import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecorruptionComponent } from './managecorruption.component';

describe('ManagecorruptionComponent', () => {
  let component: ManagecorruptionComponent;
  let fixture: ComponentFixture<ManagecorruptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecorruptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecorruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
