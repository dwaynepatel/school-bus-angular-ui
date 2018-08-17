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
import { BusCompanyComponent } from './components/bus-company/bus-company.component';
import { PassengerEditComponent } from './components/passenger/passenger-edit.component';
import { PassengerListComponent } from './components/passenger/passenger-list.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService } from './shared/auth.gaurd.service';
import { JourneyListComponent } from './components/journey/journey-list/journey-list.component';
import { JourneyEditComponent } from './components/journey/journey-edit/journey-edit.component';
import { JourneyPassengerEditComponent } from './components/journey/journey-passenger-edit/journey-passenger-edit.component';
import { JourneyPassengerListComponent } from './components/journey/journey-passenger-list/journey-passenger-list.component';
import { DriverViewListComponent } from './components/driver/driver-view-list/driver-view-list.component';
import { TestDataComponent } from './components/test-data/test-data.component';


const routes: Routes = [


//security
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home',       component: HomeComponent },
//security from pluralsight auth0
{
  path: 'callback',
  component: CallbackComponent
},


  { path: '', redirectTo: '/bus-company-list', pathMatch: 'full' },
  {
    path: 'bus-company-list',
    component: BusCompanyListComponent,
    canActivate: [AuthGuardService]
  }, 
  {
    path: 'bus-company',
    component: BusCompanyComponent
  },
  {
    path: 'bus-company-add',
    component: BusCompanyEditComponent
   
  },
  {
    path: 'bus-company-edit/:busCompanyId',
    component: BusCompanyEditComponent
  },
//driver
  {
    path: 'driver-list',
    component: DriverListComponent
  },
  {
    path: 'driver-view-list',
    component: DriverViewListComponent
  },
  {
    path: 'driver-add/:busCompanyId',
    component: DriverEditComponent
  },
  {
    path: 'driver-edit/:id/:busCompanyId',
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
    path: 'stop-add/:busCompanyId/:routeId',
    component: StopEditComponent
  },
  {
    path: 'stop-edit/:id/:routeId/:busCompanyId',
    component: StopEditComponent
  },

    //passenger
    {
      path: 'passenger-list',
      component: PassengerListComponent
    },
    {
      path: 'passenger-add',
      component: PassengerEditComponent
    },
    {
      path: 'passenger-edit/:id',
      component: PassengerEditComponent
    },

    

        //journey
        {
          path: 'journey-list',
          component: JourneyListComponent
        },
        {
          path: 'journey-add',
          component: JourneyEditComponent
        },
        {
          path: 'journey-edit/:id',
          component: JourneyEditComponent
        },

        
        //journey-passenger
        {
          path: 'journey-passenger-list',
          component: JourneyPassengerListComponent
        },
        {
          path: 'journey-passenger-add',
          component: JourneyPassengerEditComponent
        },
        {
          path: 'journey-passenger-edit/:id',
          component: JourneyPassengerEditComponent
        },


  //bus route
  {
    path: 'route-list/:busCompanyId',
    component: RouteListComponent
  },
  {
    path: 'route-add',
    component: RouteEditComponent
  },
  {
    path: 'route-add/:busCompanyId',
    component: RouteEditComponent
  },
  {
    path: 'route-add/:busCompanyId/:routeId',
    component: RouteEditComponent
  },
  {
    path: 'route-edit/:busCompanyId/:id',
    component: RouteEditComponent
  },
  {
    path: 'route-edit/:busCompanyId',
    component: RouteEditComponent
  },

  {
    path: 'route-edit',
    component: RouteEditComponent
  },
  //test data
  {
    path: 'test-data',
    component: TestDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
