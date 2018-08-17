import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../../shared/journey.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-journey-passenger-list',
  templateUrl: './journey-passenger-list.component.html',
  styleUrls: ['./journey-passenger-list.component.css']
})
export class JourneyPassengerListComponent implements OnInit {
  //variable to hold a list of any type
  journeys: Array<any>;
  passengerId: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private journeyService: JourneyService) {
  }
 

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      //pull in id and assign to passengerId 
      //console.log("id is", params.get('id'));
      const id = params.get('id');
      this.passengerId = id;
  });
  
  this.getJourneys();
}

    
  getJourneys(){ 
  
    this.journeyService.getAllFromPassengerId(this.passengerId).subscribe(
      data => {this.journeys = data}
    );
  }
  }