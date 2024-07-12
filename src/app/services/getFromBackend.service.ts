import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({providedIn : 'root'})

export class GetFromBackendService {


    constructor(private http:HttpClient ) { }

    autentificate(email, pass)
    {
        let baseUrl = "http://"+environment.server_ip+"/auth/authenticate";
        let h = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
        
        let body = new URLSearchParams();
        body.set('email', email);
        body.set('password', pass);
        
        return this.http.post(baseUrl,body.toString(),h);
        
    }


    getPadel_all():Observable<any>
    {
        console.log(environment.server_ip);
        
        let baseUrl = "http://"+environment.server_ip+"/terrainspadel/all";
        let h = { headers: new HttpHeaders().set('Content-Type', 'none').set("Access-Control-Allow-Origin","*").set("credential","true")}
        
        let body = new URLSearchParams();
        return this.http.get(baseUrl);
        
    }


    addTerrainPaddel(nom, dispo)
    {
        let baseUrl = "http://"+environment.server_ip+"/terrainspadel/add";
        let h = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
        
        let body = new URLSearchParams();
        body.set('nom', nom);
        body.set('dispo', dispo);
        
        return this.http.post(baseUrl,body.toString(),h);
    }

}