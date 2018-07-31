import { Component, OnInit } from '@angular/core';
import { StopService } from '../../shared/stop.service';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
  //variable to hold a list of any type
  stops: Array<any>;
  directions: Array<any>;

  latitude: number;
  longitude: number;
  zoom: number= 360;
            latitude1: number = 53.162623 ;
            longitude1: number = -6.911973;
     
            latitude2: number =   53.15987;
            longitude2: number =  -6.90677;
         
            latitude3: number =  53.160591;
            longitude3: number =  -6.894914;
        
            latitude4: number =  53.15838;
            longitude4: number =  -6.810998;

            public origin: {}
public destination: {}
      
  constructor(private stopService: StopService) {

   }

  ngOnInit() {
      //set current position
      this.setCurrentPosition();

      this.getDirection();

      this.getStops();
    
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  //used for direction i.e draw between 2 points
  getDirection() {
    this.origin = { lat: 53.162623, lng: -6.911973 }
    this.destination = { lat: 53.15987, lng: -6.90677 }

}
getStops(){
  this.stopService.getAll().subscribe(
    data => {this.stops = data}
  );
}
//method that takes in stops then sorts them.
sortStops(stops){

}


}