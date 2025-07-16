import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/users/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/users/auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./core/users/profile/profile.component').then(
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
          import('./core/features/cards/cards-page/cards-page.component').then(
            (m) => m.CardsPageComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './core/features/cards/card-details/card-details.component'
          ).then((m) => m.CardDetailsComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            './core/features/cards/card-random/card-random.component'
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
          import('./core/features/decks/decks-page/decks-page.component').then(
            (m) => m.DecksPageComponent,
          ),
      },
      {
        path: 'archetypes',
        loadComponent: () =>
          import(
            './core/features/decks/deck-archetypes-page/deck-archetypes-page.component'
          ).then((m) => m.DeckArchetypesPageComponent),
      },
      {
        path: 'archetypes/:id',
        loadComponent: () =>
          import(
            './core/features/decks/deck-archetypes-detail/deck-archetypes-detail.component'
          ).then((m) => m.DeckArchetypesDetailComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './core/features/decks/deck-detail/deck-detail.component'
          ).then((m) => m.DeckDetailComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            './core/features/decks/deck-random/deck-random.component'
          ).then((m) => m.DeckRandomComponent),
      },
    ],
  },

  {
    path: 'error',
    loadComponent: () =>
      import('./shared/error/error-page.component').then(
        (m) => m.ErrorPageComponent,
      ),
  },

  {
    path: '**',
    redirectTo: 'error',
  },
];
