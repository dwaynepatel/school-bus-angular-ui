import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../shared/passenger.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
 //variable to hold a list of any type
 passengers: Array<any>;

  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers(){
    this.passengerService.getAll().subscribe(
      data => {this.passengers = data}
    );
  }

}
