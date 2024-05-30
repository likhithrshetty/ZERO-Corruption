import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcorruptionComponent } from './postcorruption.component';

describe('PostcorruptionComponent', () => {
  let component: PostcorruptionComponent;
  let fixture: ComponentFixture<PostcorruptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcorruptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcorruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
