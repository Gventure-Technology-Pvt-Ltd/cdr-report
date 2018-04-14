import { Routes } from '@angular/router';

import { CalldetailsComponent } from './calldetails/calldetails.component';
import { CurrentcallsComponent } from './currentcalls/currentcalls.component';
import { DailyComponent } from './daily/daily.component';
import { HourlyComponent } from './hourly/hourly.component';
import { ReportsComponent } from './reports/reports.component';

export const ReportsRoutes: Routes = [
 { 
    path: '',
    children: [{
      path: 'currentcalls', 
      component: CurrentcallsComponent
    },{
      path: 'calldetails', 
      component: CalldetailsComponent
    },{
      path: 'daily', 
      component: DailyComponent
    },{
      path: '', 
      component: ReportsComponent
    },{
      path: 'hourly', 
      component: HourlyComponent
    }]
  }
];