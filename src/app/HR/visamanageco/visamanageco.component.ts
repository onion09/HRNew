import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Visa } from 'src/app/models/ui-models/visa.model';
import { VisamangeservicecoService } from './visamangeserviceco.service';
@Component({
  selector: 'app-visamanage',
  templateUrl: './visamanageco.component.html',
  styleUrls: ['./visamanageco.component.css'],

})
export class VisamanagecoComponent implements OnInit{
  visas : Visa[] = [];
  displayedColumns: string[] = ['name', 'workAuth', 'dayLeft', 'ActionRequired'];
  dataSource: MatTableDataSource<Visa> = new MatTableDataSource<Visa>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator
  filterString = "";



  constructor(private visaService: VisamangeservicecoService){}
  ngOnInit(): void {
    //Fetch Visas
    this.visaService.getVisas()
    .subscribe(
      (successResponse)=>{
        this.visas = successResponse;
        this.dataSource = new MatTableDataSource<Visa>(this.visas);

        if(this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
  }
}
