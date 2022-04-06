import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCategoriesElementComponent } from './favorite-categories-element.component';

describe('FavoriteCategoriesElementComponent', () => {
  let component: FavoriteCategoriesElementComponent;
  let fixture: ComponentFixture<FavoriteCategoriesElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCategoriesElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCategoriesElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
