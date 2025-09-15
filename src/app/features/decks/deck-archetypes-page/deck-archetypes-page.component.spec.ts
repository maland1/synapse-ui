import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckArchetypesPageComponent } from './deck-archetypes-page.component';

describe('DeckArchetypesPageComponent', () => {
  let component: DeckArchetypesPageComponent;
  let fixture: ComponentFixture<DeckArchetypesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckArchetypesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckArchetypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
