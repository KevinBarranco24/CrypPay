import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../src/app/api/services';//SE IMPORTA EL SERVICIO

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})


export class ECommerceComponent 
{
  public usuarios: any;
  public constructor(private api:AccountService){
    this.api.apiAccountGet$Json().subscribe(res => {
      this.usuarios = res, console.log(res);
    })
  }
}
