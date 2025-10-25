import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchetypeDeckListComponent } from './archetype-deck-list.component';

describe('ArchetypeDeckListComponent', () => {
  let component: ArchetypeDeckListComponent;
  let fixture: ComponentFixture<ArchetypeDeckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchetypeDeckListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchetypeDeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
