import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class GetFromBackend {

    constructor(private http:HttpClient ) { }

    get()
    {
        let baseUrl = "http://192.168.100.5/getKpi_json";
        let h = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
        
        let body = new URLSearchParams();
        //body.set('operator', list_op.toString());
        
        return this.http.post(baseUrl,body.toString(),h);
        
    }

}