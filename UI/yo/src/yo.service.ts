// import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
// import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import {Http} from '@angular/http';

@Injectable()

export class YoService {
  constructor(private http: HttpClient) {

  }
  getMe(url: string): Observable<any> {
    const headers = this.getHeaders();

    return this.http.get(url, {headers: headers, responseType: 'text'});
  }

  getPeers(url: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(url, {headers: headers});
  }

  getHeaders() {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  getYos (url: string) {
    const headers = this.getHeaders();
    return this.http.get(url, {headers: headers});
  }

  sendYos(url: string, data: string) {
    const httpParams = new HttpParams()
      .append('target', data);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(url, httpParams, {headers: headers, responseType: 'text'});
  }
}
