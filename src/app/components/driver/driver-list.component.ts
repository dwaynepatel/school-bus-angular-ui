import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../shared/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
//variable to hold a list of any type
drivers: Array<any>;

// temp variable to hold a list of any type for hardcoded drivers from bus id
driversFromBusId: Array<any>;

constructor(private driverService: DriverService) { }

ngOnInit() {
  this.getDrivers();
  this.getDriversFromBusId("1");
}
  
getDrivers(){
  this.driverService.getAll().subscribe(
    data => {this.drivers = data}
  );
}

getDriversFromBusId(busCompanyId: string){
  this.driverService.getDriverFromBusCompanyId(busCompanyId).subscribe(
    data => {this.driversFromBusId = data}
  );
}

}
