import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DriverService } from '../../shared/driver.service';


@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit, OnDestroy {
  driver: any = {};
  busCompanyId: string;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private driverService: DriverService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        this.driverService.get(id).subscribe((driver: any) => {
          if (driver) {
            console.log("bus driver " + driver.name);
            console.log("this bus driver " + this.driver.href);
            this.driver = driver;
            this.driver.href = id;
          
          } else {
            console.log("driver company with id '${id}' not found, returning to list");
            this.gotoList();
          }
        });
      }
      //get bus company id and assign to variable
      const busCompanyId = params.get('busCompanyId');
      console.log("bus driver bus company id "  + params.get('busCompanyId'));
      if(busCompanyId){
        this.busCompanyId = busCompanyId;
        
      }
    });
  }

  gotoList() {
    this.router.navigate(['/bus-company-edit', this.busCompanyId]);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.driverService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.driverService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}