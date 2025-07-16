import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckRandomComponent } from './deck-random.component';

describe('DeckRandomComponent', () => {
  let component: DeckRandomComponent;
  let fixture: ComponentFixture<DeckRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
