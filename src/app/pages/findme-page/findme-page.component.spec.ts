import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmePageComponent } from './findme-page.component';

describe('FindmePageComponent', () => {
  let component: FindmePageComponent;
  let fixture: ComponentFixture<FindmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindmePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
