import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visa } from 'src/app/models/ui-models/visa.model';
import { VisamangeservicecoService } from '../visamangeserviceco.service';

@Component({
  selector: 'app-visadetail',
  templateUrl: './visadetail.component.html',
  styleUrls: ['./visadetail.component.css']
})
export class VisadetailComponent implements OnInit {
  Id: string | null | undefined;
  visa: Visa= {
    name: '',
    workAuth: '',
    expireDate: '',
    dayLeft: 0,
    isActionRequired: true,
    isFilledByEmployeeRequired: false,
    isSigendByHrRequired: false,
    personID: 1,
    startDate:'',
    documents: [
        {
            name: "N/A",
            icon: "N/A",
            createdDate: "N/A"
        }
    ]
  };


  constructor(private readonly visaService: VisamangeservicecoService,
    private readonly route: ActivatedRoute ){}
  ngOnInit():void{
    this.route.paramMap.subscribe(
      (params) =>{
        this.Id=params.get('personID');

        if(this.Id){
          this.visaService.getVisa(this.Id)
          .subscribe(
            (succeseResponse) =>{
              this.visa = succeseResponse;

              console.log(succeseResponse);
            }
          );
        }
      }
    );

  }
}
