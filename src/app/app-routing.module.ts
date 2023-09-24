import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeesListComponent
  },
  {
    path:'employees',
    component:EmployeesListComponent
  },
  {
    path:'employee/add',
    component:AddEmployeeComponent
  },
  {
    path:'employee/edit/:id',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
