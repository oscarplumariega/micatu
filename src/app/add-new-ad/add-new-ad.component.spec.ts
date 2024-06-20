import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAdComponent } from './add-new-ad.component';

describe('AddNewAdComponent', () => {
  let component: AddNewAdComponent;
  let fixture: ComponentFixture<AddNewAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
