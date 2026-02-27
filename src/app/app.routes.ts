import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/tasks/task-list/task-list.page')
        .then(m => m.TaskListPage),
  },
  {
    path: 'task-list',
    loadComponent: () => import('./features/tasks/task-list/task-list.page').then( m => m.TaskListPage)
  },
];