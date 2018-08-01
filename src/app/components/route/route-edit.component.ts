import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RouteService } from '../../shared/route.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {
  busRoute: any = {}
  sub: Subscription;
  busCompanyId: string;
  isPassenger: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private routeService: RouteService,
              private sharedService: SharedService ) {
  }

  ngOnInit() {
     this.isPassenger = this.sharedService.isPassenger ;
     
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const busCompanyId = params.get('busCompanyId');
      this.busCompanyId = busCompanyId;
      console.log("params" , params);
      console.log(this.busCompanyId);
      if(busCompanyId){
        this.busCompanyId = busCompanyId;
        console.log("busCompanyId", this.busCompanyId);
      }
    
    
      console.log("id " + id);
      if (id) {
        this.routeService.get(id).subscribe((busRoute: any) => {
          console.log("inside id");
          if (busRoute) {
            console.log("bus route " + busRoute.name);
            console.log("bus route id " + busRoute.id);
            console.log("this bus route " + this.busCompanyId);
            this.busRoute = busRoute;
            this.busRoute.href = id;
           // this.busRoute.busCompanyId = busCompanyId;
          
          } else {
            console.log("Bus Route with id '${id}' not found, returning to list");
            this.gotoList();
          }
        });
      }
    });
  }

  // go to the list with a bus company id
  gotoList() {
   
    this.router.navigate(['/bus-company-edit', this.busCompanyId]);


  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.routeService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.routeService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
