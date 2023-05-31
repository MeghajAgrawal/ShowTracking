import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimedisplayComponent } from './animedisplay.component';

describe('AnimedisplayComponent', () => {
  let component: AnimedisplayComponent;
  let fixture: ComponentFixture<AnimedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimedisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
