import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [];

  constructor(private employeeService:EmployeesService){

  }
  ngOnInit():void{
      this.employeeService.getAllEmployees().subscribe({
        next:(employee)=>{
         
          this.employees = employee;
          console.log(this.employees);
        },
        error:(response)=>{
          console.log(response);
        }
      })
  }


}
