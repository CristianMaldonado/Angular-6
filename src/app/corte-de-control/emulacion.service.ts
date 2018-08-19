import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ModeloRowset } from "./model";

@Injectable()
export class EmulacionService {

    constructor(private http: Http) {  }

    getData() {
        return this.http.get('assets/data/emulacion.json').
                toPromise().
                then(resp => <ModeloRowset> resp.json())
    }
}