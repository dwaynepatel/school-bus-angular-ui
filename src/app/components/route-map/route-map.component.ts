import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
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
      
  constructor() {

   }

  ngOnInit() {
      //set current position
      this.setCurrentPosition();

      this.getDirection();
    
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
  getDirection() {
    this.origin = { lat: 53.162623, lng: -6.911973 }
    this.destination = { lat: 53.15987, lng: -6.90677 }

}

}