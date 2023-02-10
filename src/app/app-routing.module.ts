import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployelistComponent } from './employelist/employelist.component';
import { VisadetailComponent } from './HR/visamanageco/visadetail/visadetail.component';
import { VisamanagecoComponent } from './HR/visamanageco/visamanageco.component';

const routes: Routes = [
  {
    path: '',
    component: VisamanagecoComponent
  },
  {
    path:'visamanage',
    component : VisamanagecoComponent
  },
  {
    path:'employeelist',
    component : EmployelistComponent
  },
  {
    path:'visamanage/:personID',
    component:VisadetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
