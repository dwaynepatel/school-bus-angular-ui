import { Component, OnInit } from '@angular/core';
import { BusCompanyService } from '../../shared/bus-company.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-bus-company-list',
  templateUrl: './bus-company-list.component.html',
  styleUrls: ['./bus-company-list.component.css']
})
export class BusCompanyListComponent implements OnInit {
  
  //variable to hold a list of any type
  busCompanies: Array<any>;
 

  constructor(private busCompanyService: BusCompanyService, private sharedService: SharedService) { }

  ngOnInit() {
    this.getBusCompanies();
    this.sharedService.setPassenger('false');
  }
    
  getBusCompanies(){
    this.busCompanyService.getAll().subscribe(
      data => {this.busCompanies = data}
    );
  }

   

}
