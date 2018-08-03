import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
message: string = ""
testData: Array<any>;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
   
    const data = this.sharedService.getAll().subscribe(
      data => {this.testData = data});
    if(data){
      //console.log("inside test if");
    this.message = "Test data loaded";}
  }

}
