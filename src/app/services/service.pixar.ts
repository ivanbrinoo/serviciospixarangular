import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pixar } from "../models/pixar";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class ServicePixar {
    constructor (
        private _http: HttpClient,
    ) {}
    
    async getPersonajesAsync(): Promise<Pixar[]> {
        let request = "api/pixar"
        let url = environment.apipixar + request;
        return firstValueFrom(
            this._http.get<Pixar[]>(url)
        )
    }

    async crearPersonajesAsync(personaje: Pixar): Promise<any> {
        let request = "api/pixar"
        let url = environment.apipixar + request
        let header = new HttpHeaders().set ("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, personaje, {headers: header})
        )

    }

    async eliminarPersonajeAsync(id: number): Promise<any> {
        let request = "api/pixar/" + id
        let url = environment.apipixar + request
        return firstValueFrom(
            this._http.delete(url)
        )
    }
    
    }