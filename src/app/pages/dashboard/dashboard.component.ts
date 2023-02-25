import { Component} from '@angular/core';
import { StoreService } from '../../src/app/api/services';//SE IMPORTA EL SERVICIO

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent
{
  public tiendas:any;
  public constructor(private api:StoreService){
    this.api.apiStoreGet$Json().subscribe(res => {
      this.tiendas = res, console.log(res);
    })
  }
}
