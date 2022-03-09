import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Agent } from './agent';
import { catchError, map } from 'rxjs/operators';
import { Http2ServerResponse } from 'http2';
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  REST_API: string = "http://localhost:4200/api";

  httpHeaders = new HttpHeaders().set('Content-Type','application/json')
  
  constructor(private httpClient: HttpClient) { }

  AddAgent(data: Agent): Observable<any> {
    let API_URL = '${this.REST_API}/add-agent';

    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
  getAgents() {
    return this.httpClient.get('${this.REST_API}');
  }
  getAgent(id: any): Observable<any> {
    let API_URL = '${this.REST_API}/read-agent/${id}';
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(map((res: any)=> {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }
  updateAgent(id: any, data: any): Observable<any> {
    let API_URL = '${this.REST_API}/update-agent/${id}';
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
 catchError(this.handleError)
    )
  }

    deleteAgent(id: any, data: any): Observable<any> {
    let API_URL = '${this.REST_API}/delete-agent/${id}';
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage:${error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}
