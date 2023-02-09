import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HrEmployee } from '../models/ui-models/hrEmployee.model';
import { EmployeelistService } from './employeelist.service';

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent {
  hrEmployees: HrEmployee[] = [];
  displayedColumns: string[] = ['Name', 'SSN', 'StartDate', 'VisaStatus','EndDate',"EmployeeID"];
  dataSource: MatTableDataSource<HrEmployee> = new MatTableDataSource<HrEmployee>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = "";
  serchbyID ="";

  constructor(private employeeService: EmployeelistService){}
  ngOnInit(): void {
    //Fetch Employees
    this.employeeService.getEmployees()
    .subscribe(
      (successResponse)=>{
        this.hrEmployees = successResponse;
        this.dataSource = new MatTableDataSource<HrEmployee>(this.hrEmployees);

        if(this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }

  filterStudents(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
