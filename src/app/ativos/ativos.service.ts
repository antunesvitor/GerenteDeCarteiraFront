import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseAtivo } from "../shared/models/ResponseAtivo.model";

@Injectable({
    providedIn: 'root'
})
export class AtivosService {

    apiUrl = 'http://localhost:3000/ativos'

    httpHeaders = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public getAtivos(): Observable<ResponseAtivo[]>{
        return this.httpClient.get<ResponseAtivo[]>(this.apiUrl)
    }
}