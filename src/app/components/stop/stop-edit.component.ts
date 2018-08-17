import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StopService } from '../../shared/stop.service';

@Component({
  selector: 'app-stop-edit',
  templateUrl: './stop-edit.component.html',
  styleUrls: ['./stop-edit.component.css']
})
export class StopEditComponent implements OnInit {
  stop: any = {};
  //variable for route id
  routeId: string;
  //variable for bus company id
  busCompanyId: string;

  //default location for new stop is kildare.
  // possible use bus company location to set default location for new stop.
  latitude: number = 53.15987;
  longitude: number = -6.90677;
  zoom: number= 15;
            //for testing
            latitude1: number = 53.162623 ;
            longitude1: number = -6.911973;
     
            latitude2: number =   53.15987;
            longitude2: number =  -6.90677;
         
            latitude3: number =  53.160591;
            longitude3: number =  -6.894914;
        
            latitude4: number =  53.15838;
            longitude4: number =  -6.810998;

            //objects for drawing routes
            public origin: {}
            public destination: {}

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stopService: StopService) {
  }

  ngOnInit() {
 
    //get direction between two coordinates
    this.getDirection();

   
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
       this.busCompanyId = params.get('busCompanyId');
      const routeId = params.get('routeId');
      //variable for route id
      this.routeId = routeId;
      console.log("stop  id ", id);
      console.log("stop route id ", this.routeId);
      console.log("stop bus company id ", this.busCompanyId);
      
      if (id) {
        this.stopService.get(id).subscribe((stop: any) => {
          if (stop) {
            console.log(stop.gpsLat);
            console.log(stop.gpsLon);
            this.latitude = stop.gpsLat;
            this.longitude = stop.gpsLon;
            this.stop = stop;
            this.stop.href = id;
          
          } else {
            console.log("stop company with id '${id}' not found, returning to list");
            this.gotoList();

          }
        });
      }
    });
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
onChoseLocation(event){
  console.log(event);
  this.stop.gpsLon = event.coords.lng;
  this.stop.gpsLat = event.coords.lat;
  this.latitude = event.coords.lat;
  this.longitude = event.coords.lng;
}

  gotoList() {
    this.router.navigate(['/route-edit', this.busCompanyId, this.routeId]);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.stopService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.stopService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}