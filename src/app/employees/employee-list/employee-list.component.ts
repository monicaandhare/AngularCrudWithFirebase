import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database'
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';
import { ToastrConfig, ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList : Employee[];
  constructor( private employeeservice:EmployeeService,private toastr:ToastrService) {

   }

  ngOnInit() {
    this.employeeservice.getData().snapshotChanges().subscribe(item => {
      this.employeeList=[];
      item.forEach(element => {

        var payloadJson=element.payload.toJSON();
        payloadJson["$key"]=element.key;
        this.employeeList.push(payloadJson as Employee);

      });
    });
    
   
  }

    // resetForm(employeeForm?: NgForm) {
    //   if (employeeForm != null)
    //    // employeeForm.reset();
    //   this._employeeservice.selectedEmployee = {
    //     $key: null,
    //     name: '',
    //     position: '',
    //     office: '',
    //     salary: 0,
    //   }
    // }
  onEdit(emp: Employee){
    if (emp != null){
      //(JSON.stringify(emp));
      debugger;
    //var x = Object.assign({}, emp);
    //alert(JSON.stringify(x));
      this.employeeservice.selectedEmployee = Object.assign({}, emp);
      alert(JSON.stringify(this.employeeservice.selectedEmployee));
    }
  } 
   onDelete(key:string){
     if(confirm('Are you sure to delete employee?')==true){
this.employeeservice.deleteEmployee(key);
this.toastr.warning("Deleted Successfully", "Employee register");

     }
   }
  
}
