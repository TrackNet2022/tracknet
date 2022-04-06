import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTeaserComponent } from './serie-teaser.component';

describe('SerieTeaserComponent', () => {
  let component: SerieTeaserComponent;
  let fixture: ComponentFixture<SerieTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
