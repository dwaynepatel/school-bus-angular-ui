import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BusCompanyService } from '../../shared/bus-company.service';

@Component({
  selector: 'app-bus-company-edit',
  templateUrl: './bus-company-edit.component.html',
  
  styleUrls: ['./bus-company-edit.component.css']
  
})
export class BusCompanyEditComponent implements OnInit, OnDestroy {
  
  busCompany: any = {}

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private busCompanyService: BusCompanyService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      //pull in busCompanyId and assign to id as html is set up to use id the bus company 
      // i add another variable to keep track of the bus company around the view screens i.e busCompanyId
      const id = params.get('busCompanyId');
      if (id) {
        this.busCompanyService.get(id).subscribe((busCompany: any) => {
          if (busCompany) {
            //console.log("bus company " + busCompany.name);
            //console.log("this bus company " + this.busCompany.href);
            this.busCompany = busCompany;
            this.busCompany.href = id;
          
          } else {
            console.log("bus company with id '${id}' not found, returning to list");
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/bus-company-list']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.busCompanyService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.busCompanyService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}

