import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as internal from 'assert';

export interface Pulseras {
  id: string;
  pagado: string;
  total: string;
  id_usuario: string;
}

@Injectable({
  providedIn: 'root'
})
export class PulserasService {
private url = 'http://198.251.70.101/api/api/pulceras';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Pulseras]>(this.url);
  }

  get(id: string){
    return this.http.get<Pulseras>(this.url + '/' + id);
  }

  create(pulceras: Pulseras){
    return this.http.post(this.url, pulceras);
  }

  update(pulceras: Pulseras, id: string){
    return this.http.put(this.url + '/' + id, pulceras);
  }

  remove(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}
