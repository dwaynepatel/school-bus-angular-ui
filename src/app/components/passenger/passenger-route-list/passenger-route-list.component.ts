import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../shared/route.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-passenger-route-list',
  templateUrl: './passenger-route-list.component.html',
  styleUrls: ['./passenger-route-list.component.css']
})
export class PassengerRouteListComponent implements OnInit {
  //variable to hold a list of any type
  routes: Array<any>;
  passenger: string = "passenger";

  constructor(private routeService: RouteService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getRoutes();
    this.sharedService.isPassenger = true;
    console.log("inside bus passenger ", this.sharedService.isPassenger);
    
  }

  getRoutes(){
    this.routeService.getAll().subscribe(
      data => {this.routes = data}
      
    );
  }
  
  //using to change views based on if the user is a passenger or a bus company
  isPassenger(){
    console.log("before getting shared service");
    this.sharedService.isPassenger = true;
  }

}
