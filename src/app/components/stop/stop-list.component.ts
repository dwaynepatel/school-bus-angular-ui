import { Component, OnInit } from '@angular/core';
import { StopService } from '../../shared/stop.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
//variable to hold a list of any type
  stops: Array<any>;
  stopsWithId: Array<any>;
  routeId: string;
  busCompanyId: string;
  sub: Subscription;
  // is the user a passenger
  isPassenger: boolean;
  constructor(private stopService: StopService,  private route: ActivatedRoute,private sharedService: SharedService) { }

  ngOnInit() {
    //if comming from passenger then this variable should be true
    this.isPassenger = this.sharedService.isPassenger ;
    //this.getStops();
    //get the bus company id from the params, assign it and use it to get the data from the service
  this.sub = this.route.paramMap.subscribe(params => {
    const busCompanyId = params.get('busCompanyId');
    this.busCompanyId = busCompanyId;
    const routeId = params.get('id');
    console.log("route id from stop ", routeId);
    console.log("busCompanyId id from stop ", busCompanyId);
    if(routeId){
      this.routeId = routeId;
      this.stopService.getAllFromBusCompanyId(this.routeId).subscribe(
     
        data => {this.stopsWithId = data}
        
      );
    }
  });

  }
    
  getStops(){
    this.stopService.getAll().subscribe(
      data => {this.stops = data}
    );
  }

}
