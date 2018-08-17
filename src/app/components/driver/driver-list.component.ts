import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../shared/driver.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
//variable to hold a list of any type
drivers: Array<any>;
driverWithId: Array<any>;
busCompanyId: string;
sub: Subscription;

// temp variable to hold a list of any type for hardcoded drivers from bus id
driversFromBusId: Array<any>;

constructor(private driverService: DriverService, private route: ActivatedRoute) { }

ngOnInit() {
  this.getDrivers();
  this.getDriversFromBusId();

}
  
getDrivers(){
  this.driverService.getAll().subscribe(
    data => {this.drivers = data}
  );
}

getDriversFromBusId(){
      //get the bus company id from the params, assign it and use it to get the data from the service
      this.sub = this.route.paramMap.subscribe(params => {
        const busCompanyId = params.get('busCompanyId');
        
        if(busCompanyId){
          this.busCompanyId = busCompanyId;
          this.driverService.getDriverFromBusCompanyId(busCompanyId).subscribe(
            data => {this.driverWithId = data}
          );
         }
      }); 
}

}
