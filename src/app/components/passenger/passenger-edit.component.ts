import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { PassengerService } from '../../shared/passenger.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css']
})
export class PassengerEditComponent implements OnInit, OnDestroy {
  
  passenger: any = {}

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerService) {
}

ngOnInit() {
  this.sub = this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.passengerService.get(id).subscribe((passenger: any) => {
        if (passenger) {
          this.passenger = passenger;
          this.passenger.href = id;
        
        } else {
          console.log("passenger with id '${id}' not found, returning to list");
          this.gotoList();
        }
      });
    }
  });
}

  gotoList() {
    this.router.navigate(['/passenger-list']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.passengerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.passengerService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}

