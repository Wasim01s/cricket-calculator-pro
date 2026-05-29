import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'strike-rate',
    loadComponent: () =>
      import('./strike-rate/strike-rate.page').then((m) => m.StrikeRatePage),
  },

  {
    path: 'net-run-rate',
    loadComponent: () =>
      import('./net-run-rate/net-run-rate.page').then((m) => m.NetRunRatePage),
  },

  {
    path: 'dls',
    loadComponent: () =>
      import('./dls/dls.page').then((m) => m.DlsPage),
  },

  {
    path: 'tools',
    loadComponent: () =>
      import('./tools/tools.page').then((m) => m.ToolsPage),
  },

  {
    path: 'batting-average',
    loadComponent: () =>
      import('./batting-average/batting-average.page').then((m) => m.BattingAveragePage),
  },

  {
    path: 'bowling-average',
    loadComponent: () =>
      import('./bowling-average/bowling-average.page').then((m) => m.BowlingAveragePage),
  },

  {
    path: 'bowling-economy',
    loadComponent: () =>
      import('./bowling-economy/bowling-economy.page').then((m) => m.BowlingEconomyPage),
  },

  {
    path: 'bowling-strike-rate',
    loadComponent: () =>
      import('./bowling-strike-rate/bowling-strike-rate.page').then((m) => m.BowlingStrikeRatePage),
  },

  {
    path: 'over-run-rate',
    loadComponent: () =>
      import('./over-run-rate/over-run-rate.page').then((m) => m.OverRunRatePage),
  },

  {
    path: 'boundary-percentage',
    loadComponent: () =>
      import('./boundary-percentage/boundary-percentage.page').then((m) => m.BoundaryPercentagePage),
  },

  {
    path: 'required-run-rate',
    loadComponent: () =>
      import('./required-run-rate/required-run-rate.page').then((m) => m.RequiredRunRatePage),
  },
  {
    path: 'run-rate-over',
    loadComponent: () => import('./run-rate-over/run-rate-over.page').then( m => m.RunRateOverPage)
  },

];
