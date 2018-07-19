import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database'
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { element } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employeeList : any;
  constructor( private _employeeservice:EmployeeService) {

   }

  ngOnInit() {
    this._employeeservice.getData().snapshotChanges().subscribe(item => {
      this.employeeList=[];
      item.forEach(element => {

        var payloadJson=element.payload.toJSON();
        payloadJson["$key"]=element.key;
        this.employeeList.push(payloadJson as Employee);

      });
    });
    
  }

}
