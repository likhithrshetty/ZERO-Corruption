import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepublicComponent } from './managepublic.component';

describe('ManagepublicComponent', () => {
  let component: ManagepublicComponent;
  let fixture: ComponentFixture<ManagepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
