import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../shared/route.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
//variable to hold a list of any type
routes: Array<any>;

constructor(private routeService: RouteService) { }

ngOnInit() {
  this.getRoutes();
}
  
getRoutes(){
  this.routeService.getAll().subscribe(
    data => {this.routes = data}
  );
}

}

