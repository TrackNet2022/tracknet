import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddToListButtonComponent } from './add-to-list-button.component'

describe('AddToListButtonComponent', () => {
  let component: AddToListButtonComponent
  let fixture: ComponentFixture<AddToListButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToListButtonComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
