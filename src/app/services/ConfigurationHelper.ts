import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ConfigurationHelper {
    private langue = "";
    private server_ip = ""; 
    

    constructor(private http: HttpClient) {
       
    }



    public getJSON(): Observable<any> {
        return this.http.get("assets/config/config.json");
    }
   
    public getServerIp()
    {
        return this.server_ip;
    }
   
    
    // Charger les informations du fichier de configuration
    public load(environmentObject: object, path: string): Promise<any>
    {
        return this.http.get<any>(path).toPromise().then((data:any) => {
            Object.keys(data).forEach(propertyData => {
                environmentObject[propertyData]=data[propertyData]
            })
        })
        
       
        
    }

}
    