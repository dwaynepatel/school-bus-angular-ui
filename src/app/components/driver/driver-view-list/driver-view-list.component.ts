import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../../../node_modules/rxjs';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DriverService } from '../../../shared/driver.service';

@Component({
  selector: 'app-driver-view-list',
  templateUrl: './driver-view-list.component.html',
  styleUrls: ['./driver-view-list.component.css']
})
export class DriverViewListComponent implements OnInit {

//variable to hold a list of any type
drivers: Array<any>;

busCompanyId: string;
sub: Subscription;

// temp variable to hold a list of any type for hardcoded drivers from bus id
driversFromBusId: Array<any>;

constructor(private driverService: DriverService, private route: ActivatedRoute) { }

ngOnInit() {
  this.getDrivers();

}
  
getDrivers(){
  this.driverService.getAll().subscribe(
    data => {this.drivers = data}
  );
}