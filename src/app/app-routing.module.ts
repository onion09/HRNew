import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployelistComponent } from './employelist/employelist.component';
import { VisamanageComponent } from './HR/visamanage/visamanage.component';

const routes: Routes = [
  {
    path: '',
    component: VisamanageComponent
  },
  {
    path:'visamanage',
    component : VisamanageComponent
  },
  {
    path:'employeelist',
    component : EmployelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
