import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database'
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
employeeList : AngularFireList<Employee>;
  constructor( private _employeeservice:EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getData();
  }

}
