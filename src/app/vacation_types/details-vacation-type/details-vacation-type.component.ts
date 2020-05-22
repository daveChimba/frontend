import { Component, OnInit } from '@angular/core';
import { VacationTypeService } from 'src/app/_services/vacation-type.service';
import { NotifService } from 'src/app/_services/notif.service';
import { VacationType } from 'src/app/_models/vacation-type.model';
// import Swal from 'sweetalert2';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-vacation-type',
  templateUrl: './details-vacation-type.component.html',
  styleUrls: ['./details-vacation-type.component.scss']
})
export class DetailsVacationTypeComponent implements OnInit {

  
  VacationType: VacationType = new VacationType();
  constructor(
    private vacationTypeService: VacationTypeService,
    private notifService: NotifService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,) { }

  async ngOnInit() {
    const vacationType_id = +this.route.snapshot.paramMap.get("id");
    this.vacationTypeService.find(vacationType_id).then(
      data => {
        this.VacationType = new VacationType(data);

      }
    ).catch(
      error => {
        this.translate.get('type de congé.'+error.error.code)
        .subscribe(val => this.notifService.danger(val));
        this.router.navigate(['/vacation-types/liste'])
      }
    )

  }

}
