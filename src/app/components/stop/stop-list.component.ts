import { Component, OnInit } from '@angular/core';
import { StopService } from '../../shared/stop.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
//variable to hold a list of any type
  stops: Array<any>;
  constructor(private stopService: StopService) { }

  ngOnInit() {
    this.getStops();

  }
    
  getStops(){
    this.stopService.getAll().subscribe(
      data => {this.stops = data}
    );
  }

}
