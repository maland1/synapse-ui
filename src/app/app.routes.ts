import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('@auth/logout/logout.component').then((m) => m.LogoutComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('@auth/profile/profile.component').then(
        (m) => m.ProfileComponent,
      ),
    // canActivate: [AuthGuard],
  },

  {
    path: 'cards',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/cards/pages/card-list/card-list.component').then(
            (m) => m.CardListComponent,
          ),
      },
      {
        path: ':cardId',
        loadComponent: () =>
          import(
            '@features/cards/pages/card-details/card-details.component'
          ).then((m) => m.CardDetailsComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            '@features/cards/components/card-random/card-random.component'
          ).then((m) => m.CardRandomComponent),
      },
    ],
  },
  {
    path: 'decks',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/decks/pages/deck-list/deck-list.component').then(
            (m) => m.DeckListComponent,
          ),
      },
      {
        path: 'archetypes',
        loadComponent: () =>
          import(
            '@features/decks/pages/archetype-list/archetype-list.component').then(
              (m) => m.ArchetypeListComponent
            ),
      },
      {
        path: 'archetypes/:deckId',
        loadComponent: () =>
          import(
            '@features/decks/pages/archetype-deck-list/archetype-deck-list.component'
          ).then((m) => m.ArchetypeDeckListComponent),
      },
      {
        path: ':deckId',
        loadComponent: () =>
          import(
            '@features/decks/pages/deck-detail/deck-detail.component'
          ).then((m) => m.DeckDetailComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            '@features/decks/components/deck-random/deck-random.component'
          ).then((m) => m.DeckRandomComponent),
      },
    ],
  },

  {
    path: 'error',
    loadComponent: () =>
      import('@shared/error/error-page.component').then(
        (m) => m.ErrorPageComponent,
      ),
  },

  {
    path: '**',
    redirectTo: 'error',
  },
];
