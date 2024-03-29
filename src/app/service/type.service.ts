import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Type } from '../type';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private baseUrl = 'http://localhost:8082/api/types';
  private createType1 = 'http://localhost:8082/api/types/createType';

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getAllTypes(): Observable<Type[]> {
    const headers = this.jwtService.createAuthorizationHeader();
    return this.http.get<Type[]>(this.baseUrl, { headers : this.jwtService.createAuthorizationHeader() }).pipe(
      catchError(this.handleError)
    );
  }

  getTypeById(id: number): Observable<Type> {
    const headers = this.jwtService.createAuthorizationHeader();
    return this.http.get<Type>(`${this.baseUrl}/${id}`, { headers : this.jwtService.createAuthorizationHeader()});
  }

  createType(type: Type): Observable<Type> {
    const headers = this.jwtService.createAuthorizationHeader();
    console.log("tokennnn : " ,this.jwtService.createAuthorizationHeader());
    return this.http.post<Type>(this.createType1, type, { headers : this.jwtService.createAuthorizationHeader() });
  }

  updateType(id: number, type: Type): Observable<Type> {
    const headers = this.jwtService.createAuthorizationHeader();
    return this.http.put<Type>(`${this.baseUrl}/${id}`, type, { headers });
  }

  deleteType(id: number): Observable<void> {
    const headers = this.jwtService.createAuthorizationHeader();
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }



  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
}