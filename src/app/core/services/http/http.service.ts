import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  api(url: string) {
    let base = environment.api_local_base_url
    console.log(base);
    const api = `${base}/${url}`
    return api
  }

  get<T>(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<T | T[]> {
    return this.http.get<T | T[]>(this.api(url), { headers, params })
  }

}
