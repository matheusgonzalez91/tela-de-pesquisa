import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSearchComponent } from './lib-search.component';

describe('LibSearchComponent', () => {
  let component: LibSearchComponent;
  let fixture: ComponentFixture<LibSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
