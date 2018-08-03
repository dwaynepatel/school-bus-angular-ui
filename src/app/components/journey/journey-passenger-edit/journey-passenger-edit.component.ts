import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../../node_modules/rxjs';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { SharedService } from '../../../shared/shared.service';
import { JourneyService } from '../../../shared/journey.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-journey-passenger-edit',
  templateUrl: './journey-passenger-edit.component.html',
  styleUrls: ['./journey-passenger-edit.component.css']
})
export class JourneyPassengerEditComponent implements OnInit, OnDestroy {
  
  journey: any = {}

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private journeyService: JourneyService) {
  }

  ngOnInit() {
      //using to change views based on if the user is a passenger or a journey 
     // this.sharedService.isPassenger = false;
     // console.log("inside journey cimpany edit", this.sharedService.isPassenger);

    this.sub = this.route.paramMap.subscribe(params => {
      //pull in JourneyId and assign to id as html is set up to use id the journey  
      // i add another variable to keep track of the bus company around the view screens i.e id
      const id = params.get('id');
      if (id) {
        this.journeyService.get(id).subscribe((journey: any) => {
          if (journey) {
            //console.log("journey " + journey.name);
            //console.log("this journey " + this.journey.href);
            this.journey = journey;
            this.journey.href = id;
          
          } else {
            console.log("journey with id '${id}' not found, returning to list");
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/journey-passenger-list']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.journeyService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.journeyService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}