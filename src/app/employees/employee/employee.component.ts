import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
 
  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    this._employeeservice.insertEmployee(form.value);
    }

}
