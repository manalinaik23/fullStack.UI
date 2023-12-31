import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  editEmployee:Employee={
    id:'',
    name :'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };
  constructor(private route:ActivatedRoute,private employeeService:EmployeesService,private router:Router){

  }

  ngOnInit():void{
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.employeeService.getEmployee(id).subscribe({
            next:(response)=>{
                this.editEmployee = response
            }
          })
        }
      }
    })
  }

  editEmployeeRecord(){
    this.employeeService.updateEmployee(this.editEmployee.id,this.editEmployee).subscribe({
      next:(response)=>{
         this.router.navigate(['employees']);
      }
    })
  }

  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    })
  }
}
