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
      import('@features/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('@features/auth/logout/logout.component').then((m) => m.LogoutComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@features/auth/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('@features/auth/profile/profile.component').then(
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
          import('@features/cards/cards-page/cards-page.component').then(
            (m) => m.CardsPageComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            '@features/cards/card-details/card-details.component'
          ).then((m) => m.CardDetailsComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            '@features/cards/card-random/card-random.component'
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
          import('@features/decks/decks-page/decks-page.component').then(
            (m) => m.DecksPageComponent,
          ),
      },
      {
        path: 'archetypes',
        loadComponent: () =>
          import(
            '@features/decks/deck-archetypes-page/deck-archetypes-page.component'
          ).then((m) => m.DeckArchetypesPageComponent),
      },
      {
        path: 'archetypes/:id',
        loadComponent: () =>
          import(
            '@features/decks/deck-archetypes-detail/deck-archetypes-detail.component'
          ).then((m) => m.DeckArchetypesDetailComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            '@features/decks/deck-detail/deck-detail.component'
          ).then((m) => m.DeckDetailComponent),
      },
      {
        path: 'random',
        loadComponent: () =>
          import(
            '@features/decks/deck-random/deck-random.component'
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
