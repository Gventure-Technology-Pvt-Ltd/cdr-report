import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AuthGuard } from './authentication/guard/auth.guard';

export const AppRoutes : Routes = [
  {
  path: '',
  component: AppBlankComponent,
  children: [{ 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },{
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'authentication/404' 
}, {
  path: 'main',
  component: FullComponent,
  canActivate:[AuthGuard],
  children: [{
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' ,
  }, {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },{
    path: 'extension',
    loadChildren: './extension/extension.module#ExtensionModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }]
}];