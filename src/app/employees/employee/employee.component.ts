import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import {NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
 
})
export class EmployeeComponent implements OnInit {
 
  constructor(private employeeservice:EmployeeService,private tostr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form:NgForm)
  {
    if (form.value.$key == null){
    this.employeeservice.insertEmployee(form.value);
    this.tostr.success("Inserted Successfully","Employee Register");
  }
    else{
    this.employeeservice.updateEmployee(form.value);
    this.tostr.success("Updated Successfully","Employee Register");
  }
    this.resetForm();
    
    }
    resetForm(employeeForm?: NgForm) {
      if (employeeForm != null)
       // employeeForm.reset();
      this.employeeservice.selectedEmployee = {
        $key: null,
        name: '',
        position: '',
        office: '',
        salary: 0,
      }
    }
    

}
