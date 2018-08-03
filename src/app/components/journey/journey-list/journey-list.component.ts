import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../../shared/journey.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.css']
})
export class JourneyListComponent implements OnInit {
  
  //variable to hold a list of any type
  journeys: Array<any>;
  passengerId: string = "0";
  isPassenger: boolean;
  isChecked = false;
 

  constructor(private journeyService: JourneyService, private sharedService: SharedService) { }
 

  ngOnInit() {
    //get passenger view or buscompany view
    this.isPassenger = this.sharedService.isPassenger;
    console.log("passenger  from journey list after change", this.isPassenger);
    this.getJourneys();
    this.passengerId = this.sharedService.getPassengerId();
    console.log("passenger id from journey list", this.passengerId);
    //if(this.passengerId != "0"){
     // this.isPassenger = true;
    //  console.log("passenger id from journey list after change", this.isPassenger);
   // }
  }
    
  getJourneys(){ 
  
    this.journeyService.getAll().subscribe(
      data => {this.journeys = data}
    ); 
  }
  //change call if checkbox is selected or not
  change(){
    if(this.isChecked == true){
    this.isChecked = false;
  }
    else{ this.isChecked = true};
  }

  updateJourney(journey){

    console.log("passenger checked toggle",this.isChecked);
    if(this.isChecked){
      console.log("passenger checked and passengerId is :", this.passengerId);
      //using built in JPA
       
      journey.passengerId = this.passengerId;
      this.journeyService.save(journey).subscribe(result => {
          console.log("saved update");})
      
      //call to custom query using JpaRepository
     // this.journeyService.updateJourneyWithPassengerId(this.passengerId, journeyId);

      
    }
  }
}