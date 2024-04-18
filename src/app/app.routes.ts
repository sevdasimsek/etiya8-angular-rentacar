import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './routers/not-found/not-found.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { BrandsListComponent } from './features/brands/components/brands-list/brands-list.component';
import { ModelsListComponent } from './features/models/components/models-list/models-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    // pathMatch:'prefix', //Default // (/home)
    component: MainLayoutComponent,
    children: [
      {
        path: 'brands',
        component: BrandsListComponent
      },
      {
        path: 'models',
        component: ModelsListComponent
      }
    ],
  },
  {
    path: 'layout-test',
    component: TestPageComponent
  },
  //404 Not Found Page
  {
    path: '**',// Her path'de çalışır. Bu yüzden en sona yazılmalı.
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
];
