import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusCompanyListComponent } from './components/bus-company/bus-company-list.component';
import { BusCompanyEditComponent } from './components/bus-company/bus-company-edit.component';
import { DriverListComponent } from './components/driver/driver-list.component';
import { DriverEditComponent } from './components/driver/driver-edit.component';
import { StopListComponent } from './components/stop/stop-list.component';
import { StopEditComponent } from './components/stop/stop-edit.component';
import { RouteListComponent } from './components/route/route-list.component';
import { RouteEditComponent } from './components/route/route-edit.component';


const routes: Routes = [

  { path: '', redirectTo: '/bus-company-list', pathMatch: 'full' },
  {
    path: 'bus-company-list',
    component: BusCompanyListComponent
  },
  {
    path: 'bus-company-add',
    component: BusCompanyEditComponent
  },
  {
    path: 'bus-company-edit/:id',
    component: BusCompanyEditComponent
  },
//driver
  {
    path: 'driver-list',
    component: DriverListComponent
  },
  {
    path: 'driver-add',
    component: DriverEditComponent
  },
  {
    path: 'driver-edit/:id',
    component: DriverEditComponent
  },

  //stop
  {
    path: 'stop-list',
    component: StopListComponent
  },
  {
    path: 'stop-add',
    component: StopEditComponent
  },
  {
    path: 'stop-edit/:id',
    component: StopEditComponent
  },

  //bus route
  {
    path: 'route-list',
    component: RouteListComponent
  },
  {
    path: 'route-add',
    component: RouteEditComponent
  },
  {
    path: 'route-edit/:id',
    component: RouteEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
