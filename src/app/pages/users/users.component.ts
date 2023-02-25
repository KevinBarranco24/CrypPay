import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class user 
{
  public id:number;
  public firstname:string;
  public midname:string;
  public lastname:string;
  public gender:number;
  public phone:string;
  public email:string;
  public dob:string;
  public role:number;
  public accountStatusId:number;
}

export class UsersComponent {

  constructor() { }
}
