//#region imports
import { Routes } from '@angular/router';
import { adminLazyRoute } from '@taon-dev/ui/src';
//#endregion

export const TaonEmailsBackofficeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-emails-backoffice.component').then(m => m.TaonEmailsBackofficeComponent),

    children: [
      // adminLazyRoute({
      //   path: 'dashboard',
      //   menuItem: 'Dashboard',
      //   icon: 'dashboard',
      //   expandable: false,
      //   loader: () =>
      //     import('./anothermodule.routes').then(m => m.DashboardRoutes),
      // }),
    ],
  },
];

/**
 * By default exporting TaonEmailsBackofficeRoutes,
 * the command `taon generate:app:routes`
 * will automatically add them to the root routes in ./src/app.ts.
 */
// export default TaonEmailsBackofficeRoutes;