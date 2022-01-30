import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseAtivo } from "../shared/models/ResponseAtivo.model";

@Injectable({
    providedIn: 'root'
})
export class AtivosService {

    apiUrl = 'http://127.0.0.1:3000/ativos'
    // apiUrl = 'http://127.0.0.1:8000/api/ativos'

    httpHeaders = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public getAtivos(): Observable<ResponseAtivo[]> {
        return this.httpClient.get<ResponseAtivo[]>(this.apiUrl)
    }
}
