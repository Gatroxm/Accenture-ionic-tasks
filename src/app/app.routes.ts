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
  {
    path: 'category-list',
    loadComponent: () => import('./features/categories/category-list/category-list.page').then( m => m.CategoryListPage)
  },
  {
  path: 'category',
  loadComponent: () =>
    import('./features/categories/category-list/category-list.page')
      .then(m => m.CategoryListPage),
}
];