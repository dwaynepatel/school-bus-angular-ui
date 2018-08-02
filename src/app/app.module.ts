import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { BusCompanyService } from './shared/bus-company.service';
import { BusCompanyListComponent } from './components/bus-company/bus-company-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BusCompanyEditComponent } from './components/bus-company/bus-company-edit.component'; 
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DriverService } from './shared/driver.service';
import { DriverEditComponent } from './components/driver/driver-edit.component';
import { DriverListComponent } from './components/driver/driver-list.component';
import { StopService } from './shared/stop.service';
import { StopListComponent } from './components/stop/stop-list.component';
import { StopEditComponent } from './components/stop/stop-edit.component';

import { AgmCoreModule } from '@agm/core';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { AgmDirectionModule } from 'agm-direction';
import { RouteListComponent } from './components/route/route-list.component'   // agm-direction

import { RouteService } from './shared/route.service';
import { RouteEditComponent } from './components/route/route-edit.component';
import { BusCompanyComponent } from './components/bus-company/bus-company.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PassengerService } from './shared/passenger.service';
import { PassengerListComponent } from './components/passenger/passenger-list.component';
import { PassengerEditComponent } from './components/passenger/passenger-edit.component';
import { PassengerRouteListComponent } from './components/passenger/passenger-route-list/passenger-route-list.component';
import { SharedService } from './shared/shared.service';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth.gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    BusCompanyListComponent,
    BusCompanyEditComponent,
    DriverEditComponent,
    DriverListComponent,
    StopListComponent,
    StopEditComponent,
    RouteMapComponent,
    RouteListComponent,
    RouteEditComponent,
    BusCompanyComponent,
    PassengerComponent,
    PassengerListComponent,
    PassengerEditComponent,
    PassengerRouteListComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcbdspZrvAtRKPn6pSpBvgQyfjeV4zOgk'
    }),
    AgmDirectionModule      // agm-direction
  ],
  providers: [BusCompanyService, DriverService, StopService, RouteService,
               PassengerService, AuthService, AuthGuardService, SharedService 
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
