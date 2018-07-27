import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RouteService } from '../../shared/route.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {
  busRoute: any = {}

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private routeService: RouteService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.routeService.get(id).subscribe((busRoute: any) => {
          if (busRoute) {
            console.log("bus route " + busRoute.name);
            console.log("this bus route " + this.busRoute.href);
            this.busRoute = busRoute;
            this.busRoute.href = id;
          
          } else {
            console.log("Bus Route with id '${id}' not found, returning to list");
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/route-list']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    console.log("inside save " + form);
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
