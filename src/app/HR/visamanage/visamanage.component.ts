import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Visa } from 'src/app/models/ui-models/visa.model';
import { VisamangeserviceService } from './visamangeservice.service';
@Component({
  selector: 'app-visamanage',
  templateUrl: './visamanage.component.html',
  styleUrls: ['./visamanage.component.css']
})
export class VisamanageComponent implements OnInit{
  visas : Visa[] = [];
  displayedColumns: string[] = ['name', 'workAuth', 'dayLeft',"EmployeeID"];

  constructor(private visaService: VisamangeserviceService){}
  ngOnInit(): void {
    //Fetch Visas
    this.visaService.getVisas()
    .subscribe(
      (successResponse)=>{
        this.visas = successResponse;
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }
}
