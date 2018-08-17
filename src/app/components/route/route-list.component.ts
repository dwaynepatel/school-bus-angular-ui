import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../shared/route.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
//variable to hold a list of any type
routes: Array<any>;
//
routesWithId: Array<any>;

busCompanyId: string;
sub: Subscription;

constructor(private routeService: RouteService, private route: ActivatedRoute) { }

ngOnInit() {
  //this.getRoutes();

  //get the bus company id from the params, assign it and use it to get the data from the service
  this.sub = this.route.paramMap.subscribe(params => {
    const busCompanyId = params.get('busCompanyId');
    //console.log("route list buscompany id is ",busCompanyId )
    if(busCompanyId){
      this.busCompanyId = busCompanyId;
      this.routeService.getAllFromBusCompanyId(this.busCompanyId).subscribe(
     
        data => {this.routesWithId = data}
      );
    }
  });

  
}
  
getRoutes(){
  this.routeService.getAll().subscribe(
    data => {this.routes = data}
  );
}







}

