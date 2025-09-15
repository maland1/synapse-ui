import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckArchetypesDetailComponent } from './deck-archetypes-detail.component';

describe('DeckArchetypesDetailComponent', () => {
  let component: DeckArchetypesDetailComponent;
  let fixture: ComponentFixture<DeckArchetypesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckArchetypesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckArchetypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
