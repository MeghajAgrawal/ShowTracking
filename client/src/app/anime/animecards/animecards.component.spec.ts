import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimecardsComponent } from './animecards.component';

describe('AnimecardsComponent', () => {
  let component: AnimecardsComponent;
  let fixture: ComponentFixture<AnimecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
