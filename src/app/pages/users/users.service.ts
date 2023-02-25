import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable()

export class UsersServices
{
    private API_SERVER = 'http://74.208.176.8/api/Account?currentPage=0&offset=10';

    constructor(public http:HttpClient){}

    public getUsers():Observable<any>
    {
        return this.http.get(this.API_SERVER);
    }
}